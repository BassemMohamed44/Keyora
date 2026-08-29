# Contributing to Keyora

Thanks for contributing.

## Before You Start

Please check existing issues and pull requests before creating a duplicate.

For bugs, use the bug report template.

For new ideas, use the feature request template.

Security vulnerabilities should be reported according to `SECURITY.md`.

## Development Principles

Keyora is intentionally lightweight.

Prefer:

- Vanilla JavaScript
- Semantic HTML
- Maintainable CSS
- Small, focused functions
- Reusable UI patterns
- Clear naming
- Accessibility
- Arabic RTL correctness
- English LTR correctness
- Minimal dependencies

Avoid introducing a framework or dependency unless there is a clear technical reason.

## Important Product Rules

When changing the typing engine, do not break:

- WPM calculations
- CPM calculations
- Accuracy calculations
- Backspace/correction tracking
- Arabic typing
- English typing
- RTL/LTR behavior
- Adaptive training
- LocalStorage compatibility
- Existing progress

When changing the UI, preserve existing functionality.

## Testing Checklist

Before submitting a pull request, test at least:

- Arabic typing
- English typing
- RTL and LTR
- Timer
- WPM / CPM / accuracy
- Backspace and corrections
- Keyboard visualization
- Heatmap
- Adaptive training
- Learning levels
- Statistics
- History
- Achievements
- Daily challenge
- Code mode
- Custom article mode
- Settings
- Export/import
- LocalStorage persistence
- Mobile layout
- Keyboard-only navigation

## Pull Requests

Keep pull requests focused.

A good PR should explain:

1. What changed
2. Why it changed
3. How it was tested
4. Any known limitations

Do not combine unrelated redesigns, refactors and feature additions in one large PR unless necessary.
