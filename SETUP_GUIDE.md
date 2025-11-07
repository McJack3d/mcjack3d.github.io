# 🚀 GitHub Pages Setup Guide

Welcome! This guide will help you set up and maintain your GitHub.io portfolio page, even if you're a beginner.

## 📋 Table of Contents
1. [What is GitHub Pages?](#what-is-github-pages)
2. [Quick Start](#quick-start)
3. [Viewing Your Website](#viewing-your-website)
4. [Making Changes](#making-changes)
5. [Common Tasks](#common-tasks)
6. [Troubleshooting](#troubleshooting)

---

## 🌐 What is GitHub Pages?

GitHub Pages is a free service that turns your GitHub repository into a website. Your website is automatically published at:
**https://mcjack3d.github.io/**

Any changes you push to your repository will automatically update your live website within a few minutes!

---

## ⚡ Quick Start

### Step 1: Access Your Repository
1. Go to https://github.com/McJack3d/mcjack3d.github.io
2. This is where all your website files live

### Step 2: Your Website is Already Live!
Your website is automatically published at: **https://mcjack3d.github.io/**

No special setup needed - GitHub Pages is already enabled for this repository!

---

## 👀 Viewing Your Website

**Online (Recommended):**
- Simply visit: https://mcjack3d.github.io/
- Changes appear within 1-2 minutes after you commit them

**Locally (For Testing):**
1. Open Terminal (Mac/Linux) or Command Prompt (Windows)
2. Navigate to your repository folder:
   ```bash
   cd path/to/mcjack3d.github.io
   ```
3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to: `http://localhost:8000`
5. Press `Ctrl+C` in the terminal to stop the server

---

## ✏️ Making Changes

### Option 1: Edit Directly on GitHub (Easiest for Beginners)
1. Go to your repository: https://github.com/McJack3d/mcjack3d.github.io
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the pencil icon (✏️) to edit
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait 1-2 minutes and check your live website!

### Option 2: Edit Locally (More Control)
1. **Clone the repository** (first time only):
   ```bash
   git clone https://github.com/McJack3d/mcjack3d.github.io.git
   cd mcjack3d.github.io
   ```

2. **Make your changes:**
   - Edit files using any text editor (VS Code, Sublime Text, Notepad++, etc.)
   - Save your changes

3. **Test locally** (optional but recommended):
   ```bash
   python3 -m http.server 8000
   ```
   Then visit http://localhost:8000 in your browser

4. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Updated my portfolio"
   git push origin main
   ```

5. **Check your live website** in 1-2 minutes!

---

## 🛠️ Common Tasks

### Updating Your Contact Information
**File to edit:** `index.html`

**What to look for:**
```html
<a href="mailto:alexandrebredillot@gmail.com">alexandrebredillot@gmail.com</a>
<a href="tel:+33620352173">+33 6 20 35 21 73</a>
```

**How to change:**
- Replace the email and phone number with your own
- Make sure to update both the `href` attribute and the displayed text

### Adding a New Experience
**File to edit:** `index.html`

**Find the Experience section** (around line 125) and add:
```html
<div class="mb-4">
  <h5>Company Name — Your Job Title</h5>
  <p class="small text-muted">Month Year – Month Year — City, Country</p>
  <ul>
    <li>Key achievement or responsibility</li>
    <li>Another achievement</li>
    <li>Third achievement</li>
  </ul>
</div>
```

### Adding New Skills
**File to edit:** `index.html`

**Find the Skills section** (around line 161) and add to the list:
```html
<li>Your new skill here</li>
```

### Changing Colors
**File to edit:** `Style Sheets/style.css`

**Find this line** (around line 17):
```css
--primary: #0BCEAF;
```

**Change the color:**
- Use a color picker tool online (like https://colorpicker.me/)
- Replace `#0BCEAF` with your new color code
- Example: `--primary: #FF6B6B;` for a red color

### Adding a Profile Picture
1. **Save your image** to the `Images/` folder
2. **Edit** `index.html`
3. **Find** this line (around line 70):
   ```html
   <div class="profile-avatar" role="img" aria-label="Profile initials A B">AB</div>
   ```
4. **Replace** with:
   ```html
   <img src="Images/your-photo.jpg" alt="Alexandre BREDILLOT" class="profile-photo">
   ```
5. **Add CSS** to `Style Sheets/portfolio-extra.css`:
   ```css
   .profile-photo {
     width: 180px;
     height: 180px;
     border-radius: 50%;
     object-fit: cover;
     box-shadow: 0 6px 18px rgba(11,206,175,0.18);
   }
   ```

### Adding Your CV/Resume PDF
1. **Save your PDF** as `Images/CV_Alexandre_Bredillot.pdf`
2. The download button will automatically appear in the Contact section!

---

## 🐛 Troubleshooting

### My changes aren't showing up!
- **Wait 2-3 minutes** - GitHub Pages takes time to rebuild
- **Clear your browser cache** - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- **Check the Actions tab** on GitHub to see if the deployment is running

### The website looks broken after my changes
1. **Check for typos** in your HTML
2. **Make sure all tags are closed** (every `<div>` needs a `</div>`)
3. **Validate your HTML** at https://validator.w3.org/
4. **Revert to the previous version:**
   ```bash
   git revert HEAD
   git push origin main
   ```

### I don't see my repository
- Make sure you're logged into GitHub
- Check that the repository is named: `yourusername.github.io`

### Git commands don't work
- **Install Git:** https://git-scm.com/downloads
- **Configure Git:**
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

---

## 📚 Learn More

### Helpful Resources:
- **HTML Basics:** https://www.w3schools.com/html/
- **CSS Basics:** https://www.w3schools.com/css/
- **Bootstrap Documentation:** https://getbootstrap.com/docs/4.5/
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Git Tutorial:** https://www.atlassian.com/git/tutorials

### Need More Help?
- **GitHub Community Forum:** https://github.community/
- **Stack Overflow:** https://stackoverflow.com/ (search for your error message)
- **YouTube:** Search for "GitHub Pages tutorial" or "HTML CSS basics"

---

## ✨ Tips for Success

1. **Make small changes** - Test one thing at a time
2. **Save your work often** - Commit frequently with clear messages
3. **Keep backups** - Download your repository occasionally
4. **Use comments** - Add comments in your code to remember what things do
5. **Don't be afraid to experiment** - You can always undo changes!

---

**Happy coding! 🎉**

If you need help, refer to the `CUSTOMIZATION_GUIDE.md` for specific customization examples.
