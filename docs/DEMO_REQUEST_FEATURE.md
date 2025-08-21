# Demo Request Feature Documentation

## Overview
The demo request feature allows website visitors to schedule a demo of AI Ambassador. When a user submits the form, the data is:
1. Stored in a local CSV file for record-keeping
2. Sent to a Slack channel for immediate notification

## Components

### Frontend Component
- **File**: `src/components/ScheduleDemo.js`
- **Description**: React component with the demo request form
- **Fields**:
  - Name (required)
  - Email (required)
  - Company (optional)
  - Industry Vertical (dropdown)
  - Message/Requirements (optional)

### API Endpoint
- **File**: `src/app/api/demo/route.js`
- **Endpoints**:
  - `POST /api/demo` - Submit a new demo request
  - `GET /api/demo` - Retrieve demo requests (admin use)

### Data Storage
- **Location**: `data/demo-requests.csv`
- **Format**: CSV with columns:
  - timestamp
  - name
  - email
  - company
  - vertical
  - message
  - status

## Setup Instructions

### 1. Environment Configuration
1. Copy `.env.local.example` to `.env.local`
2. Set up Slack webhook:
   - Go to https://api.slack.com/apps
   - Create a new app or select an existing one
   - Enable "Incoming Webhooks"
   - Add a webhook to the `msg2ai-demo-requests` channel
   - Copy the webhook URL
3. Add the webhook URL to `.env.local`:
   ```
   SLACK_DEMO_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
   ```

### 2. Dependencies
The following packages are required (already installed):
- `csv-parse` - For parsing CSV files
- `csv-stringify` - For generating CSV files

### 3. Slack Channel
- **Channel Name**: `msg2ai-demo-requests`
- **Purpose**: Receive real-time notifications of demo requests
- **Message Format**: Rich formatted message with all form details

## Usage

### Viewing Demo Requests
Run the utility script to view all demo requests:
```bash
node scripts/view-demo-requests.js
```

Export demo requests to a formatted CSV:
```bash
node scripts/view-demo-requests.js --export
```

### API Usage
Retrieve demo requests programmatically:
```javascript
// GET /api/demo?limit=10
const response = await fetch('/api/demo?limit=10');
const data = await response.json();
console.log(data);
// Returns: { success: true, count: 10, total: 50, data: [...] }
```

## Slack Message Format
When a demo request is submitted, the Slack channel receives:
- Header with "New Demo Request for AI Ambassador"
- User details (name, email, company, industry)
- Demo requirements/message
- Timestamp of submission
- Action reminder to contact within 24 hours

## Security Considerations
- Form validation on both client and server side
- Required fields: name and email
- CSV file stored locally (not in version control)
- Slack webhook URL stored in environment variables
- Consider adding authentication to the GET endpoint for production

## Future Enhancements
- Add email notification to sales team
- Integrate with CRM system
- Add duplicate detection
- Implement rate limiting
- Add admin dashboard for managing requests
- Add automated follow-up reminders