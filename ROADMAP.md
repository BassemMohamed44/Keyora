# Keyora Roadmap

## Vision

Build a polished Arabic + English typing-learning platform that helps users improve speed, accuracy, and keyboard confidence through structured lessons, adaptive practice, analytics, and feedback.

## Phase 1 — Stability

- [ ] Expand automated tests
- [ ] Validate WPM/CPM/accuracy calculations
- [ ] Validate backspace/correction semantics
- [ ] Validate LocalStorage recovery and migration
- [ ] Remove critical console errors
- [ ] Cross-browser smoke testing

## Phase 2 — Arabic Excellence

- [ ] Audit complete Arabic physical-key mapping
- [ ] Validate Arabic Unicode and grapheme handling
- [ ] Test Arabic diacritics
- [ ] Separate Arabic and English adaptive statistics
- [ ] Expand Arabic training content
- [ ] Improve RTL edge cases

## Phase 3 — Adaptive Learning

- [ ] Expand adaptive vocabulary
- [ ] Use minimum sample thresholds for weakness detection
- [ ] Incorporate recency into weakness scoring
- [ ] Add difficulty progression
- [ ] Improve personalized exercise generation
- [ ] Strengthen final assessments

## Phase 4 — Content

- [ ] Expand English practice library
- [ ] Expand Arabic practice library
- [ ] Expand code snippets
- [ ] Add more difficulty tiers
- [ ] Reduce repeated text in tests

## Phase 5 — Product Polish

- [ ] Complete accessibility audit
- [ ] Performance profiling
- [ ] Mobile UX refinement
- [ ] Improve empty/loading/error states
- [ ] Improve onboarding
- [ ] Add richer learning recommendations

## Phase 6 — Optional Future Infrastructure

Only consider these if the product requirements justify a backend:

- [ ] User accounts
- [ ] Cloud synchronization
- [ ] Cross-device progress
- [ ] Online leaderboards
- [ ] Community challenges

These should not be introduced merely for complexity; the current client-side architecture is sufficient for the core product.

## Priority Rule

When choosing the next task, prefer:

```text
Correctness
↓
Data safety
↓
Arabic/English accuracy
↓
Learning quality
↓
Testing
↓
Accessibility
↓
Performance
↓
New features
```
