
## Personal Developer Portfolio — Dinesh Kumar J

A recruiter-focused, single-page dark portfolio that turns every section into a reason to contact you. Clean navy + cyan aesthetic, professional copy, mobile-first.

### Design system
- **Theme**: Deep navy `#050d1a` background, cyan `#00d4ff` primary accent, amber `#ffb547` highlight, soft white text, muted slate for secondary text
- **Fonts**: Syne (headings), Inter (body), JetBrains Mono (labels, tags, code)
- **Motion**: Fade-in on scroll, subtle card lift on hover, pulsing green dot for "Open to Internships"
- **Layout**: Single page with smooth-scroll anchor nav, max-width container, generous whitespace

### Sections

**1. Sticky Nav**
- Logo "DK" + links: About · Skills · Projects · Contact + persistent "Hire Me" CTA button

**2. Hero**
- Name "Dinesh Kumar J", tagline "Fullstack · DevOps · Cloud · AI/ML"
- Green pulsing dot + "Open to Internships" badge
- One-liner: 3rd-year IT student building production-grade projects
- CTAs: "View My Work" (scrolls to projects) + "Hire Me / Contact"
- Subtle grid/gradient background, no stock photos

**3. About**
- Tight 3–4 line bio positioning you as a builder + strategic thinker (chess angle)
- Inline meta: 📍 Coimbatore · 🎓 BTech IT, 3rd Year
- Skills legend chips: 🟢 Comfortable · 🟡 Learning · 🔵 Exploring

**4. Skills & Stack**
- 4 categorized cards: Languages, Frontend/Backend, DevOps/Cloud, AI/ML
- Each skill as a mono-font chip with a colored dot indicating Comfortable/Learning/Exploring

**5. Projects (Case Study format)**
- Grid of 4 cards, each with:
  - Emoji thumbnail + project name + tag pills (AI/ML, Web, DevOps)
  - "In Progress" amber badge where applicable
  - **Problem** → **Approach** → **Outcome** (one line each, clearly labeled)
  - Tech stack chips
  - GitHub button (outline) + optional Live link
- Projects: AI Pothole Detection 🚧, Student Result Dashboard 📊, Dockerized Dev Environment 🐳, Chess Move Predictor ♟️

**6. Certifications / Learning**
- Compact list cards: Microsoft AI-900 (In Progress), GitHub Foundations, with status badges and room to grow

**7. Hire Me / Contact** (primary conversion section)
- Bold heading "Let's build something real."
- Short pitch on why hire you as an intern
- Contact form: Name, Email, Opportunity Type (dropdown: Internship / Full-time / Freelance / Collab / Other), Message — validated with zod, success toast
- Side panel: LinkedIn, GitHub, Email buttons + Download Resume (PDF) button
- "Usually responds within 24 hours" note with clock icon

**8. Footer**
- Name · © 2026 · College name · email · social icons · "Built with React + Tailwind"

### Notes
- Resume download will use a placeholder file you can replace; form submission shows a success toast (no backend) — we can wire it to Lovable Cloud + email later if you want
- All emoji/SVG visuals, zero stock imagery
- Fully responsive, tested down to 360px

