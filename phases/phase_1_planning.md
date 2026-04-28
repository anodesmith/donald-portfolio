# PHASE 1: PLANNING

## OBJECTIVE
Create a high-impact cybersecurity portfolio structure tailored to red team roles.

---

## REQUIRED SITE STRUCTURE

You MUST generate:

### 1. Landing Page
- Strong positioning statement
- Key skills snapshot
- Visual terminal-style intro

### 2. About Section
- Engineering + security crossover
- AI-assisted workflow mention

### 3. Projects (MOST IMPORTANT)
Each project must be treated as a **case study**:

Structure:
- Problem
- Approach
- Techniques used
- Outcome
- Tools

Include:
- Project Charon
- Red Team Lab
- Sysmon Home Defense

---

### 4. Skills Matrix
Categorized:
- Offensive
- Defensive
- Programming
- Infrastructure

---

### 5. Research / Writeups Section
- Placeholder for future blog posts
- “EDR Evasion Insights”
- “Syscall Research”

---

### 6. Contact Section
- Email
- GitHub
- Minimal form (secure)

---

## OUTPUT FORMAT

Save to `/outputs/plan.json`

Example:
{
  "pages": ["home"],
  "sections": ["hero", "projects", "skills", "about", "contact"],
  "priority": {
    "projects": "high",
    "skills": "high"
  }
}

---

## BEST PRACTICES

- Projects must dominate the site
- No generic fluff sections
- Prioritize technical depth

---

## STOP CONDITION
WAIT for approval