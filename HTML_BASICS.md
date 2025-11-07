# 🎓 HTML Basics for Your Portfolio

A beginner-friendly guide to understanding and editing the HTML in your portfolio.

## 📚 What is HTML?

HTML (HyperText Markup Language) is the code that structures your website. Think of it like the skeleton of your webpage - it defines what content appears and how it's organized.

---

## 🏗️ Basic HTML Structure

HTML uses "tags" to define different types of content. Tags look like this: `<tag>content</tag>`

Most tags come in pairs:
- **Opening tag:** `<p>` 
- **Closing tag:** `</p>`
- **Content:** Goes between the tags

Example:
```html
<p>This is a paragraph of text.</p>
```

---

## 🔤 Common Tags in Your Portfolio

### Headings
```html
<h1>Main Title</h1>           <!-- Biggest -->
<h2>Section Title</h2>
<h3>Subsection Title</h3>      <!-- What you use most -->
<h4>Small Heading</h4>
<h5>Smaller Heading</h5>       <!-- Used for job titles -->
```

### Paragraphs
```html
<p>This is a paragraph of text. It's the most common way to display text content.</p>
```

### Links
```html
<a href="https://example.com">Click here</a>
<a href="mailto:your@email.com">Email me</a>
<a href="tel:+1234567890">Call me</a>
<a href="#section">Go to section</a>
```

### Lists
```html
<!-- Unordered list (bullet points) -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- Ordered list (numbered) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### Images
```html
<img src="Images/photo.jpg" alt="Description of image">
```

### Buttons
```html
<button>Click Me</button>
<a href="#" class="btn btn-primary">Button Link</a>
```

### Divisions (Containers)
```html
<div class="container">
  <!-- Content goes here -->
</div>
```

---

## 🎨 Classes - Adding Style

Classes tell the browser how to style elements. They look like this:
```html
<p class="text-primary">This text will be in the primary color</p>
<div class="mb-4">This has margin bottom</div>
```

Common classes in your portfolio:
- `text-primary` - Primary color text
- `text-muted` - Gray text
- `mb-4` - Margin bottom (spacing)
- `mt-3` - Margin top (spacing)
- `card` - Card container
- `btn btn-primary` - Primary button style

---

## 📝 Your Portfolio Structure

Here's how your `index.html` is organized:

```html
<!doctype html>
<html>
  <head>
    <!-- Meta information, title, styles -->
  </head>
  <body>
    <!-- Navigation bar -->
    <nav>...</nav>
    
    <!-- Hero section -->
    <header id="home">...</header>
    
    <!-- Main content -->
    <main>
      <section id="about">About section</section>
      <section id="education">Education section</section>
      <section id="experience">Experience section</section>
      <section id="skills">Skills section</section>
      <section id="projects">Projects section</section>
      <section id="contact">Contact section</section>
    </main>
    
    <!-- Footer -->
    <footer>...</footer>
    
    <!-- Scripts (JavaScript) -->
    <script>...</script>
  </body>
</html>
```

---

## ✏️ Safe Editing Tips

### ✅ DO:
- Edit the text between tags: `<p>Change this text</p>`
- Update URLs in `href` attributes: `<a href="new-url.com">`
- Change image paths: `<img src="Images/new-image.jpg">`
- Add or remove list items: `<li>New item</li>`
- Copy and paste entire sections to duplicate them

### ❌ DON'T:
- Delete or change tags unless you know what they do
- Remove closing tags (every `<div>` needs a `</div>`)
- Delete classes (they control styling)
- Change IDs in sections (used for navigation)
- Edit inside `<script>` tags unless you know JavaScript

---

## 🛠️ Common Editing Tasks

### Change Your Name
**Find:**
```html
<h2 class="mt-3">Alexandre BREDILLOT</h2>
```
**Change to:**
```html
<h2 class="mt-3">Your Full Name</h2>
```

### Update Email
**Find:**
```html
<a href="mailto:alexandrebredillot@gmail.com">alexandrebredillot@gmail.com</a>
```
**Change to:**
```html
<a href="mailto:your@email.com">your@email.com</a>
```
**Note:** Update both the `href` AND the visible text!

### Add a Skill
**Find the skills list:**
```html
<ul>
  <li>Python (pandas, NumPy, scikit-learn, matplotlib, seaborn)</li>
  <li>SQL / PostgreSQL / database querying</li>
  <!-- Add your new skill below -->
</ul>
```
**Add:**
```html
  <li>Your new skill here</li>
```

### Add Experience
**Find the experience section and copy this template:**
```html
<div class="mb-4">
  <h5>Company Name — Job Title</h5>
  <p class="small text-muted">Start Date – End Date — City, Country</p>
  <ul>
    <li>Achievement or responsibility</li>
    <li>Another achievement</li>
    <li>Third achievement</li>
  </ul>
</div>
```

---

## 🔍 How to Find What to Edit

1. **Use your browser's "Find" feature:**
   - Press `Ctrl+F` (Windows) or `Cmd+F` (Mac)
   - Type the text you want to change
   - It will highlight it in the file

2. **Look for section IDs:**
   - About: `<section id="about">`
   - Education: `<section id="education">`
   - Experience: `<section id="experience">`
   - Skills: `<section id="skills">`
   - Projects: `<section id="projects">`
   - Contact: `<section id="contact">`

3. **Use comments as guides:**
   - Comments look like this: `<!-- PROJECTS -->`
   - They help you find sections quickly

---

## 🐛 Common Mistakes & Fixes

### Missing Closing Tag
**Problem:**
```html
<div class="container">
  <p>Some text</p>
<!-- Missing </div> here! -->
```
**Fix:** Always close your tags
```html
<div class="container">
  <p>Some text</p>
</div>
```

### Broken Link
**Problem:**
```html
<a href="www.example.com">Link</a>  <!-- Missing https:// -->
```
**Fix:** Include the full URL
```html
<a href="https://www.example.com">Link</a>
```

### Image Not Showing
**Problem:**
```html
<img src="photo.jpg" alt="My photo">  <!-- Wrong path -->
```
**Fix:** Use correct path
```html
<img src="Images/photo.jpg" alt="My photo">
```

---

## 🎯 Practice Exercise

Try this safe edit:
1. Find this line: `<p class="mb-1">Data Specialist • AI Strategist • Data Governance</p>`
2. Change it to your own titles
3. Save the file
4. Test locally with `python3 -m http.server 8000`
5. If it looks good, commit and push!

---

## 📚 Learn More

### Free Resources:
- **W3Schools HTML Tutorial:** https://www.w3schools.com/html/
- **MDN HTML Basics:** https://developer.mozilla.org/en-US/docs/Learn/HTML
- **freeCodeCamp:** https://www.freecodecamp.org/learn/

### Quick Tips:
- 💾 **Save often** - Don't lose your work!
- 👀 **Preview in browser** - Test before pushing
- 📝 **Use comments** - Help yourself remember: `<!-- This is a comment -->`
- 🔄 **Make backups** - Copy the file before big changes
- 📖 **Read other code** - Learn from what's already there

---

## 🆘 Getting Unstuck

If something breaks:
1. **Check for typos** - Missing quotes, brackets, or closing tags
2. **Validate your HTML** - Use https://validator.w3.org/
3. **Compare with backup** - What changed?
4. **Start over** - Restore from Git: `git checkout index.html`
5. **Ask for help** - GitHub Issues, Stack Overflow, or forums

---

## ✨ You've Got This!

Remember: 
- Everyone was a beginner once
- Making mistakes is how you learn
- You can't really "break" anything (Git lets you undo!)
- Start with small changes
- Google is your friend

**Happy coding! 🎉**

For specific portfolio edits, see `CUSTOMIZATION_GUIDE.md`
For complete setup help, see `SETUP_GUIDE.md`
