# Email Setup Instructions

The contact form is now functional but currently only logs emails to the console. To enable actual email sending, follow these steps:

## Option 1: Using Nodemailer with Gmail (Recommended for testing)

1. Install nodemailer:
```bash
npm install nodemailer
npm install @types/nodemailer --save-dev
```

2. Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

3. Enable 2-factor authentication on your Gmail account
4. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"

5. Update `app/api/contact/route.ts` to uncomment the Nodemailer code

## Option 2: Using SendGrid (Recommended for production)

1. Sign up for SendGrid
2. Get your API key
3. Create `.env.local`:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

4. Install SendGrid:
```bash
npm install @sendgrid/mail
```

## Option 3: Using Resend (Modern alternative)

1. Sign up for Resend
2. Get your API key
3. Create `.env.local`:
```env
RESEND_API_KEY=your-resend-api-key
```

4. Install Resend:
```bash
npm install resend
```

## Current Status

The contact form currently:
- ✅ Validates all fields
- ✅ Shows loading states
- ✅ Displays success/error messages
- ✅ Logs submissions to console
- ⚠️ Does NOT send actual emails (needs configuration)

## Testing

You can test the form by:
1. Running `npm run dev`
2. Filling out the contact form
3. Checking the console for logged submissions
4. Setting up email service to receive actual emails

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables for all sensitive data
- Consider rate limiting for production use
- Add CAPTCHA for spam protection
