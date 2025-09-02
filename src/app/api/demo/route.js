import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

// Slack webhook URL for msg2ai-demo-requests channel
const SLACK_WEBHOOK_URL = process.env.SLACK_DEMO_WEBHOOK_URL;

// Check if we're in production (Vercel)
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || process.env.VERCEL;

// CSV file path (only used in development)
const CSV_FILE_PATH = path.join(process.cwd(), 'data', 'demo-requests.csv');

// Ensure data directory exists (development only)
async function ensureDataDirectory() {
  if (IS_PRODUCTION) return; // Skip in production
  
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read existing CSV data (development only)
async function readCSVData() {
  if (IS_PRODUCTION) return []; // Return empty array in production
  
  try {
    await fs.access(CSV_FILE_PATH);
    const fileContent = await fs.readFile(CSV_FILE_PATH, 'utf-8');
    return parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });
  } catch {
    // File doesn't exist, return empty array
    return [];
  }
}

// Write data to CSV (development only)
async function writeCSVData(data) {
  if (IS_PRODUCTION) return; // Skip in production
  
  const csv = stringify(data, {
    header: true,
    columns: ['timestamp', 'name', 'email', 'company', 'vertical', 'message', 'status']
  });
  await fs.writeFile(CSV_FILE_PATH, csv);
}

// Send notification to Slack
async function sendToSlack(formData) {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('SLACK_DEMO_WEBHOOK_URL not configured - skipping Slack notification');
    return false;
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'short',
    timeStyle: 'short',
  });

  const slackPayload = {
    username: 'MSG2AI Demo Bot',
    icon_emoji: ':rocket:',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🚀 New Demo Request for AI Ambassador',
          emoji: true
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${formData.name}`
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${formData.email}`
          },
          {
            type: 'mrkdwn',
            text: `*Company:*\n${formData.company || 'Not provided'}`
          },
          {
            type: 'mrkdwn',
            text: `*Industry:*\n${formData.vertical || 'Not specified'}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Demo Requirements:*\n${formData.message || 'No specific requirements mentioned'}`
        }
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `📅 Submitted at ${timestamp}`
          }
        ]
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Action Required:* Please reach out within 24 hours to schedule the demo.'
        }
      }
    ]
  };

  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to send Slack notification:', errorText);
      return false;
    }

    console.log('✅ Demo request sent to Slack successfully');
    return true;
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return false;
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      );
    }

    // Add timestamp and status
    const timestamp = new Date().toISOString();
    const demoRequest = {
      timestamp,
      name: formData.name,
      email: formData.email,
      company: formData.company || '',
      vertical: formData.vertical || '',
      message: formData.message || '',
      status: 'pending'
    };

    // Only save to CSV in development
    if (!IS_PRODUCTION) {
      // Ensure data directory exists
      await ensureDataDirectory();

      // Read existing data
      const existingData = await readCSVData();
      
      // Add new request
      existingData.push(demoRequest);
      
      // Write updated data to CSV
      await writeCSVData(existingData);
      console.log('✅ Demo request saved to CSV');
    } else {
      console.log('📧 Running in production - skipping CSV storage');
    }

    // Send to Slack (don't wait for it to complete)
    sendToSlack(formData).catch(error => {
      console.error('Slack notification failed:', error);
    });

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
      data: {
        timestamp,
        requestId: `DEMO-${Date.now()}`
      }
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process demo request',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve demo requests (for admin use - development only)
export async function GET(request) {
  try {
    // In production, return a message that this endpoint is not available
    if (IS_PRODUCTION) {
      return NextResponse.json({
        success: false,
        message: 'Demo request retrieval is only available in development. In production, demo requests are sent directly to Slack.',
        data: []
      });
    }
    
    // You might want to add authentication here
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    
    await ensureDataDirectory();
    const data = await readCSVData();
    
    // Sort by timestamp (newest first) and limit
    const sortedData = data
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, limit);

    return NextResponse.json({
      success: true,
      count: sortedData.length,
      total: data.length,
      data: sortedData
    });

  } catch (error) {
    console.error('Error retrieving demo requests:', error);
    return NextResponse.json(
      { 
        error: 'Failed to retrieve demo requests',
        details: error.message 
      },
      { status: 500 }
    );
  }
}