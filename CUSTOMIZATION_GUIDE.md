# 🎨 Customization Guide

This guide shows you exactly how to customize your portfolio website with specific examples. Perfect for beginners!

## 📋 Table of Contents
1. [Quick Reference](#quick-reference)
2. [Customizing Content](#customizing-content)
3. [Customizing Colors](#customizing-colors)
4. [Customizing Layout](#customizing-layout)
5. [Adding New Sections](#adding-new-sections)
6. [Advanced Customizations](#advanced-customizations)

---

## 🎯 Quick Reference

| What You Want to Change | File to Edit | Section |
|------------------------|--------------|---------|
| Your name, title, bio | `index.html` | Lines 49, 71-72, 81-82 |
| Contact info (email, phone) | `index.html` | Lines 86-89, 207-210 |
| Professional summary | `index.html` | Lines 102 |
| Education | `index.html` | Lines 107-123 |
| Work experience | `index.html` | Lines 126-158 |
| Skills | `index.html` | Lines 162-199 |
| Primary color | `Style Sheets/style.css` | Line 17 |
| Avatar style | `Style Sheets/portfolio-extra.css` | Lines 2-13 |

---

## ✏️ Customizing Content

### Change Your Name and Title

**File:** `index.html`

**Find (around line 49):**
```html
<a class="navbar-brand" href="#home"><span class="text-primary">Alexandre</span> BREDILLOT</a>
```

**Change to:**
```html
<a class="navbar-brand" href="#home"><span class="text-primary">Your First Name</span> YOUR LAST NAME</a>
```

**Also update (around line 71):**
```html
<h2 class="mt-3">Alexandre BREDILLOT</h2>
<p class="mb-1">Data Specialist • AI Strategist • Data Governance</p>
```

**Change to:**
```html
<h2 class="mt-3">Your Full Name</h2>
<p class="mb-1">Your Title 1 • Your Title 2 • Your Title 3</p>
```

---

### Update Your Professional Summary

**File:** `index.html`

**Find (around line 102):**
```html
<p>MSc Data Science & AI student with strong experience...</p>
```

**Replace with your own summary:**
```html
<p>Write 2-3 sentences about yourself. Include your current role, key skills, and career goals. Keep it concise and professional!</p>
```

**Tips:**
- Start with your current position or status
- Mention 3-5 key skills
- End with what you're looking for or passionate about
- Keep it under 100 words

---

### Add or Update Social Media Links

**File:** `index.html`

**Find the contact section (around line 88):**
```html
<div class="mt-2"><strong>LinkedIn</strong> <a class="text-light" href="https://www.linkedin.com/in/alexandre-bredillot" target="_blank" rel="noopener">linkedin.com/in/alexandre-bredillot</a></div>
```

**Add more social links:**
```html
<div class="mt-2"><strong>LinkedIn</strong> <a class="text-light" href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener">linkedin.com/in/your-profile</a></div>
<div class="mt-2"><strong>GitHub</strong> <a class="text-light" href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a></div>
<div class="mt-2"><strong>Twitter</strong> <a class="text-light" href="https://twitter.com/yourusername" target="_blank" rel="noopener">@yourusername</a></div>
```

---

## 🎨 Customizing Colors

### Change the Primary Color Theme

**File:** `Style Sheets/style.css`

**Find (around line 17):**
```css
--primary: #0BCEAF;
```

**Popular color options:**
```css
--primary: #0BCEAF;  /* Turquoise (current) */
--primary: #3498db;  /* Blue */
--primary: #e74c3c;  /* Red */
--primary: #2ecc71;  /* Green */
--primary: #9b59b6;  /* Purple */
--primary: #f39c12;  /* Orange */
--primary: #1abc9c;  /* Teal */
--primary: #34495e;  /* Dark Gray */
```

**Create your own color:**
1. Visit https://colorpicker.me/
2. Pick a color you like
3. Copy the hex code (e.g., `#FF6B6B`)
4. Replace `#0BCEAF` with your color

---

### Change Avatar Background Gradient

**File:** `Style Sheets/portfolio-extra.css`

**Find (around line 11):**
```css
background: linear-gradient(135deg, #0BCEAF 0%, #078571 100%);
```

**Try these gradient combinations:**
```css
/* Blue gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sunset gradient */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Green gradient */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Professional gray */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Or use a solid color:**
```css
background: #3498db;  /* Replace with any color code */
```

---

### Change Background Colors

**File:** `Style Sheets/style.css`

**Find (around line 32):**
```css
--light: #ffffff;
```

**Change section backgrounds:**
- `#ffffff` = White
- `#f8f9fa` = Light gray
- `#ecf0f1` = Slightly darker gray
- Any custom color code

---

## 📐 Customizing Layout

### Change Avatar Size

**File:** `Style Sheets/portfolio-extra.css`

**Find (around lines 2-3):**
```css
.profile-avatar {
  width: 180px;
  height: 180px;
```

**Make it larger:**
```css
.profile-avatar {
  width: 220px;
  height: 220px;
```

**Make it smaller:**
```css
.profile-avatar {
  width: 140px;
  height: 140px;
```

**Remember:** Also update the font-size (line 9) proportionally:
- 180px avatar → 64px font
- 220px avatar → 80px font
- 140px avatar → 48px font

---

### Adjust Section Spacing

**File:** `index.html`

**Find sections with class `py-5`:**
```html
<section id="about" class="py-5">
```

**Spacing options:**
- `py-3` = Small spacing
- `py-4` = Medium spacing
- `py-5` = Large spacing (current)
- `py-6` = Extra large spacing

---

### Change Font Family

**File:** `Style Sheets/style.css`

**Find (around line 33):**
```css
--font-family-sans-serif: "Roboto", sans-serif;
```

**Popular alternatives:**
```css
/* Modern and clean */
--font-family-sans-serif: "Inter", sans-serif;

/* Classic and readable */
--font-family-sans-serif: "Open Sans", sans-serif;

/* Professional */
--font-family-sans-serif: "Lato", sans-serif;

/* Elegant */
--font-family-sans-serif: "Montserrat", sans-serif;
```

**Don't forget to update the Google Fonts link in `index.html` (line 14):**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

---

## ➕ Adding New Sections

### Add a Projects Section

**File:** `index.html`

**Add after the Skills section (around line 200):**
```html
<!-- PROJECTS -->
<section id="projects" class="py-5">
  <div class="container">
    <h3>Projects</h3>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <p class="card-text">Brief description of your project. What problem did it solve? What technologies did you use?</p>
            <a href="#" class="btn btn-primary btn-sm" target="_blank">View Project</a>
            <a href="#" class="btn btn-outline-primary btn-sm" target="_blank">Source Code</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">Another Project</h5>
            <p class="card-text">Description of another project you're proud of.</p>
            <a href="#" class="btn btn-primary btn-sm" target="_blank">View Project</a>
            <a href="#" class="btn btn-outline-primary btn-sm" target="_blank">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Add to navigation menu (around line 55):**
```html
<li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
```

---

### Add a Certifications Section

**File:** `index.html`

**Add after Education (around line 124):**
```html
<!-- CERTIFICATIONS -->
<section id="certifications" class="py-5">
  <div class="container">
    <h3>Certifications</h3>
    <div class="row">
      <div class="col-md-6">
        <h5>🎓 Certification Name</h5>
        <p class="mb-1 small text-muted">Issuing Organization — Year</p>
        <p class="mb-3">Brief description or key skills learned.</p>
      </div>
      <div class="col-md-6">
        <h5>🎓 Another Certification</h5>
        <p class="mb-1 small text-muted">Issuing Organization — Year</p>
        <p class="mb-3">Brief description or key skills learned.</p>
      </div>
    </div>
  </div>
</section>
```

---

### Add a Blog/Writing Section

**File:** `index.html`

```html
<!-- WRITING -->
<section id="writing" class="py-5 bg-light">
  <div class="container">
    <h3>Recent Writing</h3>
    <div class="mb-4">
      <h5><a href="#" target="_blank">Article Title</a></h5>
      <p class="small text-muted">Published on Medium — Month Year</p>
      <p>Brief summary of the article. What's it about? Why should someone read it?</p>
    </div>
    <div class="mb-4">
      <h5><a href="#" target="_blank">Another Article</a></h5>
      <p class="small text-muted">Published on Dev.to — Month Year</p>
      <p>Brief summary of another article.</p>
    </div>
  </div>
</section>
```

---

## 🚀 Advanced Customizations

### Add Smooth Scroll Animation

**File:** `Style Sheets/portfolio-extra.css`

**Add at the end:**
```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

---

### Add Hover Effects to Cards

**File:** `Style Sheets/portfolio-extra.css`

**Add at the end:**
```css
/* Card hover effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
}
```

---

### Add Button Hover Effects

**File:** `Style Sheets/portfolio-extra.css`

**Add at the end:**
```css
/* Button hover effects */
.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}
```

---

### Add Section Fade-In Animation

**File:** `Style Sheets/portfolio-extra.css`

**Add at the end:**
```css
/* Fade in sections */
section {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### Make Avatar Image Round

If you want to replace the initials with an actual photo:

**Step 1:** Add your photo to `Images/profile-photo.jpg`

**Step 2:** Edit `index.html` (around line 70):
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

---

## 💡 Pro Tips

1. **Always test locally** before pushing changes
2. **Make one change at a time** - easier to debug
3. **Keep a backup** of working code before major changes
4. **Use browser DevTools** (F12) to test CSS changes live
5. **Commit often** with clear messages like "Updated skills section"

---

## 📚 Resources

- **Color Palette Generator:** https://coolors.co/
- **Gradient Generator:** https://cssgradient.io/
- **Google Fonts:** https://fonts.google.com/
- **Bootstrap Components:** https://getbootstrap.com/docs/4.5/components/
- **CSS Animations:** https://animate.style/

---

**Need more help?** Check out `SETUP_GUIDE.md` for basic setup instructions!
