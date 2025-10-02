# Email Setup Guide for Portfolio Contact Form

Your portfolio now has a fully functional contact form with the following features:
- ✅ Name field (required)
- ✅ Email field (required) 
- ✅ Phone field (optional)
- ✅ Message field (required)
- ✅ Form validation
- ✅ Success/Error feedback
- ✅ Fallback to mailto if EmailJS isn't configured

## Current Status
The form is working with a **mailto fallback** - when users submit the form, it will open their default email client with a pre-filled email to `gulapsakhan415@gmail.com`.

## To Enable Direct Email Sending (Optional)

If you want emails to be sent directly without opening the user's email client, follow these steps:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (`gulapsakhan415@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact from {{from_name}}

You have received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)

### Step 5: Update Your Code
In `src/App.js`, replace these lines (around line 157-159):

```javascript
const serviceId = 'service_gulbashan'; // Replace with your Service ID
const templateId = 'template_portfolio'; // Replace with your Template ID  
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your Public Key
```

### Step 6: Test
1. Save the file
2. The form will now send emails directly to `gulapsakhan415@gmail.com`
3. Test by filling out the form on your portfolio

## Email Content
When someone fills out your contact form, you'll receive an email with:
- **Subject**: "New Portfolio Contact from [Name]"
- **Content**: Name, Email, Phone (if provided), and Message
- **Reply-to**: The sender's email address

## Troubleshooting
- If EmailJS setup fails, the form automatically falls back to mailto
- Users will see a helpful error message with a direct mailto link
- All form data is validated before submission
- The form shows loading states and success/error messages

## Security Notes
- EmailJS public key is safe to expose in frontend code
- No sensitive credentials are stored in your code
- EmailJS handles all email delivery securely
- Form includes basic spam protection through validation

Your contact form is ready to use! 🎉
