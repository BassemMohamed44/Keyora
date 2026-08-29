# Keyora — Project Information

## Current Architecture

Keyora is a static client-side web application.

### Runtime files

- `index.html` — application structure, pages, controls and semantic markup.
- `style.css` — visual system, layout, responsive behavior, component styling and animations.
- `main.js` — application state, localization, typing logic, metrics, learning, adaptive training, statistics, achievements, persistence and UI behavior.

## Current Pages

The current application contains:

- Home
- Typing Test
- Results
- Learn
- Code Typing
- Custom Article
- Adaptive Training
- Statistics
- Achievements
- Settings

## Persistence

The application currently uses browser LocalStorage with the storage key:

```text
Keyora
```

The JavaScript defines a storage schema version and migration path.

## Current Content

The project currently includes:

- Arabic and English general typing texts
- Progressive levels
- JavaScript, Python, C++, HTML and CSS typing snippets
- Custom article practice
- Arabic/English localization

## Recommended Next Engineering Priorities

1. Automated core-logic tests
2. Arabic Unicode/grapheme validation
3. Language-separated adaptive statistics
4. Physical Arabic keyboard mapping validation
5. Larger adaptive vocabulary datasets
6. More training/code content
7. Cross-browser regression testing
8. Accessibility audit
9. Performance audit
