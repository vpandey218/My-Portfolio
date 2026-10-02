# Vipin Kumar Pandey: Portfolio Website

A static, responsive portfolio for a Data Analyst & Power BI Specialist. All content comes from the attached resume. No build step and no backend.

## Features
- Hero with career highlights taken from the resume (8+ years, 4+ years in analytics, 25% faster ticket resolution, 8+ hours saved per week)
- Career timeline drawn automatically from the experience entries
- Experience split into core analytics roles and earlier roles
- Skills grouped as in the resume
- Contact details, LinkedIn and NovyPro links
- "Download resume" buttons (nav, hero, contact)
- Light and dark mode (follows the visitor's system), keyboard focus styles, reduced-motion support
- SEO: meta description, Open Graph tags, JSON-LD Person data

## Folder structure
```
index.html
.nojekyll
images/favicon.svg
resume/Vipin_Kumar_Pandey_Resume.pdf
scripts/main.js      timeline + count-up
styles/main.css      colors, type and layout (see :root variables)
```

## Notes on content
The resume has a "Key Data Analytics Projects" heading with no entries, and lists no education or certifications. These sections are left out. When you have details, add a `<section>` to `index.html` (copy the structure of the Skills section) and a link in the `<nav>`.

## Customize
- **Text:** edit `index.html`.
- **Add a job:** copy a `<li class="job">`. Set `data-start` / `data-end` as decimal years (Mar 2020 is about 2020.17), `data-type` as `a` (analytics) or `b` (earlier) and `data-label`. The timeline updates itself. If you add roles before 2014 or after 2026, change `min` / `max` in `scripts/main.js`.
- **Colors and fonts:** change the variables at the top of `styles/main.css`.
- **New resume:** replace the PDF in `resume/`, keeping the filename (or update the three `href`s).

## Deploy on GitHub Pages
1. Create a repository (for a root URL, name it `<username>.github.io`).
2. Upload the contents of this folder so `index.html` is at the repository root.
3. Open **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. Your site goes live in a minute or two at `https://<username>.github.io/`.
