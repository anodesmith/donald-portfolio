# GLOBAL RULES (MANDATORY)

## General
- Do NOT skip steps
- Do NOT hallucinate experience or projects
- Ask for clarification if CV data is missing
- Maintain professional cybersecurity tone

## Code Quality
- Use clean architecture principles
- Modular, reusable components only
- No inline CSS (unless justified)
- Follow accessibility standards (WCAG)

## Security (CRITICAL for this project)
- No exposed secrets or API keys
- Sanitize all inputs
- Avoid insecure libraries
- Apply OWASP Top 10 awareness in design

## UI/UX
- Minimalist, modern, hacker aesthetic (dark theme preferred)
- Responsive design (mobile-first)
- Fast loading performance

## Content Integrity
- Only use verified CV information
- Do not exaggerate hacking capabilities
- Use ethical hacking terminology

## Output Control
- Always write outputs to /outputs
- Never overwrite without logging

## MEMORY RULE (CRITICAL)

All progress must be externalized to files.
Never rely on session memory.

State must always be recoverable from:
- state.md
- outputs/
- logs/