# Keyora Code Review Guide

Use this document when reviewing changes to the project.

## 1. Correctness

Ask:

- Does typing still compare expected vs actual input correctly?
- Are metrics mathematically consistent?
- Are corrections counted correctly?
- Does completion happen exactly once?
- Does the timer have safe boundaries?

## 2. Arabic

Ask:

- Is the change language-aware?
- Does it work with RTL?
- Does it work with Arabic Unicode?
- Does it incorrectly reuse English keyboard mapping?
- Are Arabic and English statistics kept distinct?

## 3. Data Safety

Ask:

- Could this change reset LocalStorage?
- Does it preserve old state?
- Is imported data validated?
- Is migration required?

## 4. Security

Look for:

- Unsafe `innerHTML`
- Untrusted HTML
- Unsafe URL handling
- Unvalidated imported state
- Secrets or credentials in source

Prefer safe DOM APIs when HTML rendering is not required.

## 5. Performance

Pay special attention to code executed for every `keydown` event.

Avoid unnecessary:

- Full DOM rebuilds
- Layout thrashing
- LocalStorage writes
- Heavy animations
- Expensive calculations

## 6. Accessibility

Check:

- Keyboard navigation
- Focus visibility
- Labels
- ARIA status updates
- Color contrast
- Reduced motion
- Logical reading order

## 7. Maintainability

Prefer:

- Clear names
- Small functions
- Reusable constants
- Minimal duplication
- Explicit state transitions

Avoid adding complexity without a measurable benefit.

## 8. Regression

Every PR that changes core typing behavior should test:

```text
English
Arabic
RTL
LTR
Backspace
Corrections
Timer
WPM
Accuracy
Results
History
Adaptive Training
Persistence
```
