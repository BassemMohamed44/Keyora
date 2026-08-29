# Keyora Architecture

## Overview

Keyora is a client-side Arabic and English typing-learning platform built with plain HTML, CSS, and JavaScript.

The current architecture intentionally avoids a frontend framework or build step. The application runs directly in a modern browser and stores user state locally.

## High-Level Architecture

```text
┌──────────────────────────────────────────────┐
│                  Keyora UI                   │
│ HTML + CSS + DOM interactions                │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              Application Logic               │
│ main.js                                      │
│                                              │
│ • Localization / RTL-LTR                     │
│ • Typing engine                               │
│ • Metrics                                     │
│ • Error tracking                              │
│ • Learning levels                             │
│ • Adaptive training                           │
│ • Statistics / history                        │
│ • XP / achievements / streak                  │
│ • Daily challenge                             │
│ • Code typing                                 │
│ • Settings                                    │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│                 Persistence                  │
│ Browser LocalStorage                         │
└──────────────────────────────────────────────┘
```

## Runtime Files

### `index.html`

Defines the application structure, navigation, views, controls, dialogs, typing areas, statistics sections, and accessibility semantics.

### `style.css`

Contains the visual system, responsive layouts, component styling, states, animations, RTL/LTR presentation, and the glass/light UI.

### `main.js`

Contains the application state and client-side behavior, including typing, metrics, learning, adaptive analysis, localization, statistics, achievements, persistence, and UI event handling.

## Main Functional Domains

### Typing Engine

Responsible for the active typing session:

- Expected text
- User input
- Progress
- Timer
- Character validation
- Completion
- Backspace/correction behavior

### Metrics

Calculates and exposes typing performance such as:

- WPM
- Raw WPM
- Adjusted WPM
- CPM
- Accuracy
- Errors
- Corrections
- Duration

### Error Tracking

Records typing errors and related information used by statistics, heatmap visualization, and adaptive training.

### Keyboard System

Provides keyboard visualization, physical-key/finger guidance, and error heatmap information for supported layouts.

### Learning System

Manages the progressive learning path, level state, progress, requirements, and completion.

### Adaptive Training

Uses recent typing performance and weakness data to generate more targeted practice.

### Statistics

Maintains historical performance and presents trends, summaries, and test results.

### Gamification

Handles XP, achievements, streaks, and daily challenges.

### Persistence

Stores user progress and preferences in LocalStorage. The application includes a storage schema version/migration mechanism.

## Data Flow

A typical typing session follows this flow:

```text
User starts test
      ↓
Text/session initialized
      ↓
Keyboard input
      ↓
Typing engine validates input
      ↓
Metrics + error tracker updated
      ↓
UI progress/statistics updated
      ↓
Session completed
      ↓
Results calculated
      ↓
History / XP / achievements / streak updated
      ↓
State persisted to LocalStorage
```

## Localization

Keyora supports English and Arabic.

The interface must preserve:

- LTR for English
- RTL for Arabic
- Appropriate Arabic typography
- Language-aware content
- Language-aware statistics where applicable

Arabic Unicode handling should be treated carefully, especially when dealing with combining marks and grapheme boundaries.

## Persistence Contract

The current storage key is:

```text
Keyora
```

Future changes to the persisted state should be backward-compatible.

If the state structure changes:

1. Increase the schema version.
2. Add a migration path.
3. Preserve existing user progress where possible.
4. Fall back safely if stored data is invalid.

## Architectural Principles

1. Keep the core typing logic independent from presentation where practical.
2. Avoid unnecessary dependencies.
3. Prefer small, focused functions.
4. Keep Arabic and English data distinguishable.
5. Never silently discard user progress.
6. Keep the typing path performant.
7. Preserve keyboard accessibility.
8. Avoid unsafe DOM insertion of user-controlled content.

## Known Evolution Areas

The architecture is suitable for the current static application. Future engineering work should prioritize:

- More automated tests around core logic
- Stronger Arabic Unicode/grapheme handling
- More robust language-separated adaptive statistics
- Expanded adaptive vocabulary
- Larger training datasets
- Further separation of UI and domain logic if the application grows significantly
