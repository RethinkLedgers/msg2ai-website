#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const CSV_FILE_PATH = path.join(process.cwd(), 'data', 'demo-requests.csv');

function viewDemoRequests() {
  try {
    // Check if file exists
    if (!fs.existsSync(CSV_FILE_PATH)) {
      console.log('No demo requests found. The CSV file does not exist yet.');
      return;
    }

    // Read the CSV file
    const fileContent = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
    
    // Parse CSV data
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    if (records.length === 0) {
      console.log('No demo requests found in the CSV file.');
      return;
    }

    // Display header
    console.log('\n========================================');
    console.log('       AI AMBASSADOR DEMO REQUESTS');
    console.log('========================================\n');
    console.log(`Total requests: ${records.length}\n`);

    // Sort by timestamp (newest first)
    records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Display each request
    records.forEach((record, index) => {
      const date = new Date(record.timestamp).toLocaleString();
      console.log(`--- Request #${records.length - index} ---`);
      console.log(`Date: ${date}`);
      console.log(`Name: ${record.name}`);
      console.log(`Email: ${record.email}`);
      console.log(`Company: ${record.company || 'Not provided'}`);
      console.log(`Industry: ${record.vertical || 'Not specified'}`);
      console.log(`Message: ${record.message || 'No specific requirements'}`);
      console.log(`Status: ${record.status}`);
      console.log('');
    });

    // Summary statistics
    console.log('========================================');
    console.log('              SUMMARY');
    console.log('========================================');
    
    // Count by industry
    const verticalCounts = {};
    records.forEach(r => {
      const vertical = r.vertical || 'Not specified';
      verticalCounts[vertical] = (verticalCounts[vertical] || 0) + 1;
    });
    
    console.log('\nRequests by Industry:');
    Object.entries(verticalCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([vertical, count]) => {
        console.log(`  ${vertical}: ${count}`);
      });

    // Count by status
    const statusCounts = {};
    records.forEach(r => {
      statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
    });
    
    console.log('\nRequests by Status:');
    Object.entries(statusCounts).forEach(([status, count]) => {
      console.log(`  ${status}: ${count}`);
    });

  } catch (error) {
    console.error('Error reading demo requests:', error.message);
  }
}

// Export to CSV with additional formatting
function exportToFormattedCSV() {
  try {
    if (!fs.existsSync(CSV_FILE_PATH)) {
      console.log('No demo requests to export.');
      return;
    }

    const fileContent = fs.readFileSync(CSV_FILE_PATH, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true
    });

    const exportPath = path.join(process.cwd(), 'data', `demo-requests-export-${Date.now()}.csv`);
    
    // Create a formatted CSV with additional columns
    const csvHeader = 'Timestamp,Name,Email,Company,Industry,Requirements,Status,Date Formatted\n';
    const csvRows = records.map(r => {
      const dateFormatted = new Date(r.timestamp).toLocaleString();
      return `"${r.timestamp}","${r.name}","${r.email}","${r.company}","${r.vertical}","${r.message}","${r.status}","${dateFormatted}"`;
    }).join('\n');

    fs.writeFileSync(exportPath, csvHeader + csvRows);
    console.log(`\nExported to: ${exportPath}`);
    
  } catch (error) {
    console.error('Error exporting demo requests:', error.message);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--export')) {
  exportToFormattedCSV();
} else if (args.includes('--help')) {
  console.log(`
AI Ambassador Demo Requests Viewer

Usage:
  node scripts/view-demo-requests.js          View all demo requests
  node scripts/view-demo-requests.js --export Export to formatted CSV
  node scripts/view-demo-requests.js --help   Show this help message
  `);
} else {
  viewDemoRequests();
}