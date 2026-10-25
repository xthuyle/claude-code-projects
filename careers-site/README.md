# Thuy Le / Careers

Static careers page (styled to `brand/BRAND.md`) for the **Part-Time Executive & Content Assistant** role, hosted on Netlify. Applications go to **Netlify Forms** (form name: `assistant-applications`).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Role page and application form |
| `thank-you.html` | Branded confirmation page (served at `/thank-you`) |
| `404.html` | Not-found page |
| `styles.css` | All styling |
| `script.js` | Validation, AJAX submission, draft autosave |
| `images/` | Hero photo (JPEG + WebP, full size and 720px) |
| `../netlify.toml` | Tells Netlify to publish this folder |

No build step. Netlify serves the folder as-is and detects the form at deploy time.

## How submission works

- The form posts to Netlify as `application/x-www-form-urlencoded`. The thank-you page only loads **after Netlify returns a success response**. If the request fails, the applicant sees an error and their answers stay on the page.
- Without JavaScript, the form falls back to a normal POST, and Netlify redirects to `/thank-you` itself.
- Spam protection: a hidden honeypot field (`bot-field`) plus Netlify's built-in Akismet filter.
- Answers are saved in the applicant's browser while they type, so an Instagram in-app browser reload doesn't lose their work. The saved copy is cleared after a successful submission.

## Viewing applications

Netlify dashboard → your site → **Forms** → `assistant-applications`.
You can open each submission, or click **Download as CSV** to work in Google Sheets or Excel.

> If an application seems to be missing, check the **Spam submissions** list first. Akismet sometimes flags real ones by mistake; you can mark them as verified.

## Email notifications to twe@xthuyleofficial.com

You set these up once in the Netlify dashboard:

1. Open the site in Netlify → **Project configuration** (or **Site configuration**) → **Notifications** → **Emails and webhooks**.
2. Under **Form submission notifications**, click **Add notification** → **Email notification**.
3. Event: **New form submission**. Email: `twe@xthuyleofficial.com`. Form: `assistant-applications`.
4. Save, then send a test application and check that the email arrives (look in spam/promotions too).

The subject line is set in the form itself: *"New application: Part-Time Executive & Content Assistant (#id)"*. Netlify sets Reply-To to the applicant's email, so you can reply to them straight from your inbox.

## Making edits

Edit the HTML/CSS in this folder and push to the connected branch. If you rename or remove form fields, keep the old ones as hidden inputs, or past data in those columns stops showing in the dashboard.
