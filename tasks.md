# MASTER TASK CONTROLLER (RESUMABLE)

## STARTUP LOGIC

IF fresh session:
→ Read resume.md
→ Recover state

---

## EXECUTION FLOW

1. Check state.md
2. Identify current phase
3. Resume from NEXT ACTION

---

## AFTER EACH STEP

- Update state.md
- Save outputs
- Log in logs/progress.md

---

## AFTER EACH PHASE

- Run validation.md
- Set APPROVED = false
- WAIT for user confirmation

---

## ON USER APPROVAL

- APPROVED = true
- Move to next phase

---

## FAILURE HANDLING

If error:
- Log in state.md
- Attempt fix
- If fails → ask user