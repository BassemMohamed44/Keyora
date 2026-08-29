# Testing Guide

## Testing Philosophy

Keyora's most important requirement is correctness of the typing engine. A visually correct interface is not enough if WPM, accuracy, Arabic input, corrections, or progress are wrong.

Testing should therefore prioritize:

1. Core typing logic
2. Metrics
3. Arabic/English behavior
4. Persistence
5. Adaptive training
6. Learning progression
7. UI regression
8. Accessibility
9. Responsive behavior

## Manual Smoke Test

After every significant change:

### Navigation

- [ ] Home opens
- [ ] Learn opens
- [ ] Typing Test opens
- [ ] Code Mode opens
- [ ] Adaptive Training opens
- [ ] Statistics opens
- [ ] Achievements opens
- [ ] Settings opens

### English Typing

- [ ] Text loads
- [ ] Correct characters advance
- [ ] Incorrect characters are recorded
- [ ] Backspace behaves correctly
- [ ] Timer starts/stops correctly
- [ ] Completion works
- [ ] Results are correct

### Arabic Typing

- [ ] RTL layout is correct
- [ ] Arabic text displays correctly
- [ ] Input validation works
- [ ] Backspace works
- [ ] Statistics are recorded under Arabic
- [ ] Keyboard guidance is correct

### Metrics

Test:

- [ ] 100% accuracy
- [ ] Many errors
- [ ] Corrections
- [ ] Very short sessions
- [ ] Long sessions
- [ ] No division-by-zero
- [ ] No NaN/Infinity
- [ ] No negative adjusted WPM

### Persistence

- [ ] Reload preserves progress
- [ ] Settings persist
- [ ] History persists
- [ ] Invalid storage does not crash the app
- [ ] Reset works
- [ ] Export works
- [ ] Import works
- [ ] Imported data is validated

## Edge Cases

### Input

- Empty text
- One character
- Very long text
- Spaces
- Punctuation
- Numbers
- Symbols
- Arabic characters
- Arabic diacritics
- Mixed Arabic and English
- Repeated backspaces

### Timing

- Start immediately
- Complete before the timer expires
- Timer reaches zero
- Refresh during a session
- Start multiple sessions

### Statistics

- No history
- One session
- Multiple sessions
- Same-day sessions
- Arabic-only history
- English-only history
- Mixed-language history

## Automated Testing Targets

When a test framework is introduced, isolate pure logic and cover:

```text
metrics
typing validation
backspace/corrections
timer state
accuracy
WPM/CPM
Arabic Unicode handling
keyboard mapping
adaptive weakness analysis
adaptive exercise generation
level requirements
XP
achievements
streak
history
storage migration
import/export validation
```

## Browser Matrix

At minimum, perform smoke testing in current:

- Chrome/Chromium
- Edge
- Firefox
- Safari when available

## Responsive Matrix

Test at representative:

- Desktop width
- Laptop width
- Tablet portrait
- Tablet landscape
- Mobile portrait
- Mobile landscape

## Accessibility Checks

- [ ] Keyboard-only navigation
- [ ] Visible focus
- [ ] Logical tab order
- [ ] Sufficient contrast
- [ ] No color-only status
- [ ] Reduced-motion preference
- [ ] Accessible button labels
- [ ] Screen-reader status updates where required

## Console

A release candidate should have no unexpected:

- JavaScript errors
- Unhandled promise rejections
- Failed local resources
- Repeated warnings caused by the application

## Release Gate

Do not label a release stable if there is an unresolved critical issue affecting:

- Typing correctness
- Arabic input
- Data persistence
- Results accuracy
- User progress
- Security
