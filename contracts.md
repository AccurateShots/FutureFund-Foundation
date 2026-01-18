# Future Fund Foundation - Backend Integration Contracts

## Overview
This document defines API contracts, data models, and integration points for connecting the frontend with MongoDB backend.

## Current Mock Data (in `/app/frontend/src/mock.js`)
- `mockSubmitContact()` - Contact form submissions
- `mockSubmitChapterInterest()` - Join chapter form submissions
- `mockSubmitSchoolInterest()` - School partnership form submissions
- `leadershipTeam` - Static leadership data (will remain hardcoded)
- `programs` - Program information (will remain hardcoded)
- `downloadableResources` - Resource links (will remain hardcoded)

## Database Models

### 1. ContactSubmission
**Collection:** `contact_submissions`
```python
{
    "_id": ObjectId,
    "name": str,          # Full name
    "email": str,         # Email address
    "subject": str,       # Inquiry subject
    "message": str,       # Message content
    "created_at": datetime,
    "status": str         # "new", "responded", "archived"
}
```

### 2. ChapterInterest
**Collection:** `chapter_interests`
```python
{
    "_id": ObjectId,
    "name": str,          # Student full name
    "email": str,         # Student email
    "school": str,        # School name
    "grade": str,         # Current grade level
    "message": str,       # Why interested (optional)
    "created_at": datetime,
    "status": str         # "new", "contacted", "joined"
}
```

### 3. SchoolInterest
**Collection:** `school_interests`
```python
{
    "_id": ObjectId,
    "contact_name": str,  # Administrator/teacher name
    "email": str,         # Contact email
    "school_name": str,   # School name
    "district": str,      # District name (optional)
    "role": str,          # Position (Principal, Teacher, etc)
    "phone": str,         # Phone number (optional)
    "message": str,       # Additional info (optional)
    "created_at": datetime,
    "status": str         # "new", "consultation_scheduled", "implementing"
}
```

## API Endpoints

### Contact Form
**POST** `/api/contact`
- **Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us. We will get back to you soon.",
  "id": "submission_id"
}
```

### Chapter Interest
**POST** `/api/chapter-interest`
- **Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "school": "string",
  "grade": "string",
  "message": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Thank you for your interest! We will reach out with next steps.",
  "id": "submission_id"
}
```

### School Interest
**POST** `/api/school-interest`
- **Request Body:**
```json
{
  "contactName": "string",
  "email": "string",
  "schoolName": "string",
  "district": "string",
  "role": "string",
  "phone": "string",
  "message": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Thank you! We will contact you to discuss bringing Future Fund to your school.",
  "id": "submission_id"
}
```

## Frontend Integration Changes

### Files to Modify:

1. **`/app/frontend/src/pages/Contact.jsx`**
   - Remove: `import { mockSubmitContact } from '../mock'`
   - Add: API call to `POST /api/contact`
   - Use: `REACT_APP_BACKEND_URL` environment variable

2. **`/app/frontend/src/pages/GetInvolved.jsx`**
   - Remove: `import { mockSubmitChapterInterest, mockSubmitSchoolInterest } from '../mock'`
   - Add: API calls to `POST /api/chapter-interest` and `POST /api/school-interest`
   - Use: `REACT_APP_BACKEND_URL` environment variable

### API Helper
Create `/app/frontend/src/api/client.js`:
```javascript
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const submitContact = async (data) => {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
};

export const submitChapterInterest = async (data) => {
  const response = await axios.post(`${API_URL}/chapter-interest`, data);
  return response.data;
};

export const submitSchoolInterest = async (data) => {
  const response = await axios.post(`${API_URL}/school-interest`, data);
  return response.data;
};
```

## Backend Implementation Plan

1. **Create Models** (`/app/backend/models.py`)
   - ContactSubmission model
   - ChapterInterest model
   - SchoolInterest model

2. **Create API Endpoints** (`/app/backend/server.py`)
   - POST /api/contact
   - POST /api/chapter-interest
   - POST /api/school-interest

3. **Add Email Notifications** (Optional for MVP)
   - Send confirmation emails to users
   - Send notification emails to admin (info@futurefund.org)

4. **Error Handling**
   - Validate all required fields
   - Return appropriate error messages
   - Handle database connection issues

## Testing Checklist

- [ ] Contact form submits successfully and saves to DB
- [ ] Chapter interest form submits successfully and saves to DB
- [ ] School interest form submits successfully and saves to DB
- [ ] Toast notifications display on success/error
- [ ] Form fields clear after successful submission
- [ ] Backend validation catches invalid inputs
- [ ] MongoDB stores data correctly with timestamps
- [ ] Error handling works for network failures

## Notes
- Leadership team, programs, and resources will remain hardcoded (no backend needed)
- Email notifications are optional for initial launch
- Status fields allow for future admin dashboard functionality
