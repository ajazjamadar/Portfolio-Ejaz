# Md Ejazuddin Jamadar — Personal Portfolio Website

A production-ready, high-performance, single-page personal portfolio website engineered for **Md Ejazuddin Jamadar**, tailored for both **Software Developer (Java / Spring Boot backend)** and **DevOps / Cloud Engineer** roles in Bengaluru, India.

Designed with a restrained modern dark glassmorphism design system, ambient gradient lighting, fluid typography, WCAG AA accessibility, zero build steps, and an instant dual-role switcher.

---

## 📁 Folder Structure

```text
Porfolio/
├── index.html          # Semantic HTML5 single-page application & SEO metadata
├── styles.css          # Glassmorphism design system, CSS variables & responsive layout
├── script.js           # Central configuration/data store, role switcher & interactive engines
├── README.md           # Documentation, configuration guide, and deployment instructions
└── assets/             # Static documents and optional media
    ├── Md_Ejazuddin_Jamadar-Resume_SD.pdf       # Active resume for Software Developer mode
    └── Md_Ejazuddin_Jamadar_-_2P_DevOps_2026.pdf # Active resume for DevOps & Cloud mode
```

---

## ⚙️ Configuration & Customization Guide

All personal info, project repositories, credentials, and mode preferences live in a single, well-documented `PORTFOLIO_DATA` object at the top of [`script.js`](file:///c:/Users/mdeja/Desktop/Porfolio/script.js).

### 1. How to Set GitHub and Live Demo Links

Open [`script.js`](file:///c:/Users/mdeja/Desktop/Porfolio/script.js) and locate `PORTFOLIO_DATA`:

```javascript
identity: {
  name: "Md Ejazuddin Jamadar",
  githubUsername: "ajazjamadar",
  githubUrl: "https://github.com/ajazjamadar"
}
```

To update project repository links or add live demos, scroll to `PORTFOLIO_DATA.projects`:

```javascript
{
  id: 1,
  title: "FinTrack (Personal Finance Tracker)",
  // Set your real repository URL:
  githubUrl: "https://github.com/your-username/fintrack",
  // Set your live demo URL (or leave as "" to omit the button):
  demoUrl: "https://fintrack.yourdomain.com"
}
```
*Note: If `demoUrl` or `githubUrl` is empty (`""`), the corresponding button is automatically omitted from the project card.*

---

### 2. How to Swap in a Real Profile Photo

By default, the portfolio uses a CSS-generated avatar with initials **"EJ"** inside a glowing gradient ring.

To use a real photograph:
1. Save your square photo (e.g. 400x400 JPG or PNG) as `assets/profile.jpg`.
2. Open [`index.html`](file:///c:/Users/mdeja/Desktop/Porfolio/index.html) and locate `#profileAvatar` (around line 185):
3. Uncomment the image tag:
   ```html
   <div class="avatar-wrapper" id="profileAvatar">
     <div class="avatar-ring">
       <div class="avatar-initials"><span>EJ</span></div>
     </div>
     <!-- Uncomment this line: -->
     <img src="assets/profile.jpg" alt="Md Ejazuddin Jamadar" class="avatar-image" />
     <div class="avatar-status-badge"><span class="status-indicator"></span></div>
   </div>
   ```

---

### 3. Where to Place the Two Resume PDFs

The dual-mode role switcher automatically adjusts the download target and filename:
- **Software Developer Mode**: `assets/Md_Ejazuddin_Jamadar-Resume_SD.pdf`
- **DevOps Mode**: `assets/Md_Ejazuddin_Jamadar_-_2P_DevOps_2026.pdf`

Drop your latest PDF exports into the `assets/` folder with those exact file names. Both buttons (in the sticky navbar and hero) will dynamically serve the appropriate file.

---

### 4. Contact Form Configuration (Formspree or Mailto)

- By default, the contact form validates input and triggers your client's default email client (`mailto:mdejazuddinjamadar@gmail.com`) with the sender's name, email, subject, and message pre-populated.
- To connect to **[Formspree](https://formspree.io/)** for zero-backend form submissions:
  1. Create a free form at Formspree.
  2. In [`index.html`](file:///c:/Users/mdeja/Desktop/Porfolio/index.html), add `action="https://formspree.io/f/YOUR_FORM_ID"` and `method="POST"` to `<form id="contactForm">`.

---

## 🚀 Deployment Instructions

Because this site requires **no build step**, you can deploy it directly as static files.

### Deploying to GitHub Pages (Recommended)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   ```
2. Create a new repository on [GitHub](https://github.com/new) and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder `/ (root)`.
   - Click **Save**. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`.

### Deploying to Vercel
1. Install Vercel CLI (optional): `npm i -g vercel` and run `vercel` in the project directory.
2. Alternatively, visit [vercel.com](https://vercel.com/), click **Add New Project**, import your GitHub repository, and click **Deploy**. No build command or output directory configuration is needed.

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `Porfolio` folder into the Netlify dashboard, or link your GitHub repository.
3. Leave Build Command blank, set Publish directory to `.`, and deploy.

---

## 🎯 Direct Role Linking

The portfolio reads the URL hash to pre-select the role view for targeted job applications:
- **Developer link**: `https://yourdomain.com/#developer`
- **DevOps link**: `https://yourdomain.com/#devops`

Switching modes updates the URL hash automatically without reloading the page.
