#!/usr/bin/env node

// Test script for demo form submission

async function testDemoSubmission() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company Inc.',
    vertical: 'hotels',
    message: 'This is a test submission from the test script. Looking forward to seeing how AI Ambassador can help our hotel operations.'
  };

  console.log('Testing demo submission...');
  console.log('Sending data:', testData);

  try {
    const response = await fetch('http://localhost:3001/api/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('\n✅ Success! Demo request submitted.');
      console.log('Response:', result);
      console.log('\nCheck the following:');
      console.log('1. Slack channel "msg2ai-demo-requests" for the notification');
      console.log('2. Run "node scripts/view-demo-requests.js" to see the CSV data');
    } else {
      console.error('❌ Failed:', result.error);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nMake sure the Next.js dev server is running (npm run dev)');
  }
}

testDemoSubmission();