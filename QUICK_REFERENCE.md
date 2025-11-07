# 📝 Quick Reference Guide

A cheat sheet for common editing tasks. For detailed instructions, see `SETUP_GUIDE.md` and `CUSTOMIZATION_GUIDE.md`.

---

## 🎯 Most Common Edits

### 1. Update Your Name
**File:** `index.html`
**Lines:** 49, 71, 28 (structured data)
```html
<span class="text-primary">YourFirstName</span> YOURLASTNAME
```

### 2. Update Email & Phone
**File:** `index.html`
**Lines:** 86-89, 207-210, 29-30 (structured data)
```html
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+1234567890">+1 234 567 890</a>
```

### 3. Change Primary Color
**File:** `Style Sheets/style.css`
**Line:** 17
```css
--primary: #0BCEAF;  /* Your hex color */
```

### 4. Add a New Project
**File:** `index.html`
**Section:** Projects (around line 203)
```html
<div class="col-md-6 mb-4">
  <div class="card shadow-sm h-100 project-card">
    <div class="card-body">
      <h5 class="card-title">🎯 Project Name</h5>
      <p class="card-text">Project description here...</p>
      <div class="mt-3">
        <span class="badge badge-primary mr-1">Tech1</span>
        <span class="badge badge-primary">Tech2</span>
      </div>
      <div class="mt-3">
        <a href="URL" class="btn btn-sm btn-primary" target="_blank">View Project</a>
        <a href="GITHUB_URL" class="btn btn-sm btn-outline-primary" target="_blank">Source Code</a>
      </div>
    </div>
  </div>
</div>
```

### 5. Add Work Experience
**File:** `index.html`
**Section:** Experience (around line 130)
```html
<div class="mb-4">
  <h5>Company — Job Title</h5>
  <p class="small text-muted">Start Date – End Date — City, Country</p>
  <ul>
    <li>Achievement or responsibility 1</li>
    <li>Achievement or responsibility 2</li>
  </ul>
</div>
```

### 6. Add New Skill
**File:** `index.html`
**Section:** Skills (around line 167)
```html
<li>Your new skill or technology</li>
```

### 7. Update Professional Summary
**File:** `index.html`
**Line:** 102
```html
<p>Your 2-3 sentence professional summary here...</p>
```

### 8. Add Profile Picture (Replace Avatar)
**Step 1:** Save image as `Images/profile-photo.jpg`
**Step 2:** In `index.html` (line 70), replace:
```html
<div class="profile-avatar" role="img" aria-label="Profile initials A B">AB</div>
```
with:
```html
<img src="Images/profile-photo.jpg" alt="Your Name" class="profile-photo">
```
**Step 3:** Add to `Style Sheets/portfolio-extra.css`:
```css
.profile-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(11,206,175,0.18);
  display: block;
  margin: 0 auto;
}
```

### 9. Upload Your CV/Resume
**File location:** `Images/CV_Alexandre_Bredillot.pdf`
- Simply save your PDF with this exact name
- The download button will automatically work

### 10. Update Social Media Links
**File:** `index.html`
**Lines:** 88-89, 207-210 (in page), 169-177 (footer)
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
```

---

## 🎨 Popular Color Themes

Copy these into `Style Sheets/style.css` line 17:

```css
/* Current - Turquoise/Teal */
--primary: #0BCEAF;

/* Professional Blue */
--primary: #3498db;

/* Modern Purple */
--primary: #9b59b6;

/* Bold Red */
--primary: #e74c3c;

/* Fresh Green */
--primary: #2ecc71;

/* Elegant Navy */
--primary: #2c3e50;

/* Warm Orange */
--primary: #e67e22;
```

---

## 🚀 Quick Commands

### View Locally
```bash
cd /path/to/mcjack3d.github.io
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

### Commit & Push Changes
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Undo Last Commit (Before Push)
```bash
git reset --soft HEAD~1
```

### See What Changed
```bash
git status
git diff
```

---

## 📂 File Structure Reference

```
mcjack3d.github.io/
├── index.html                    ← Main page (edit this!)
├── README.md                     ← Overview
├── SETUP_GUIDE.md               ← Full setup guide
├── CUSTOMIZATION_GUIDE.md       ← Detailed examples
├── QUICK_REFERENCE.md           ← This file
├── .gitignore                   ← Files to ignore
│
├── Style Sheets/
│   ├── style.css                ← Bootstrap styles (colors here!)
│   └── portfolio-extra.css      ← Custom styles
│
├── Scripts/
│   ├── jquery-3.4.1.min.js
│   └── bootstrap.bundle.min.js
│
└── Images/
    ├── close.png                ← Favicon
    └── CV_Alexandre_Bredillot.pdf  ← Your CV (add this!)
```

---

## 🆘 Quick Troubleshooting

### Changes don't appear?
1. Wait 2 minutes for GitHub Pages to rebuild
2. Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check Actions tab on GitHub for deployment status

### Website looks broken?
1. Check for typos in HTML tags
2. Make sure all `<div>` tags are closed with `</div>`
3. Validate HTML at https://validator.w3.org/
4. Revert: `git revert HEAD && git push`

### Can't push to GitHub?
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 💡 Best Practices

1. ✅ **Test locally first** - Use `python3 -m http.server 8000`
2. ✅ **Make small changes** - One thing at a time
3. ✅ **Commit often** - With clear messages
4. ✅ **Keep backups** - Download your repo occasionally
5. ✅ **Use the guides** - Check CUSTOMIZATION_GUIDE.md for examples

---

## 📚 Full Documentation

- **Basic Setup:** `SETUP_GUIDE.md`
- **Customization Examples:** `CUSTOMIZATION_GUIDE.md`
- **Project Overview:** `README.md`

---

**Need more help?** Open the full guides or check online resources like W3Schools!
