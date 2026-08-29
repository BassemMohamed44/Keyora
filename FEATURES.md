# Keyora Features

## Core Typing

### Arabic Typing

Practice Arabic text with RTL-aware presentation and Arabic keyboard visualization.

### English Typing

Practice English text using standard LTR presentation.

### Typing Test

Timed typing sessions provide performance measurements and a final results view.

### Custom Article

Users can practice with custom article content instead of only built-in exercises.

## Performance Metrics

Keyora tracks:

- WPM
- Raw WPM
- Adjusted WPM
- CPM
- Accuracy
- Errors
- Corrections
- Duration
- Characters

The exact calculation rules should remain consistent across the application.

## Keyboard Visualization

The application provides a visual keyboard to support:

- Current-key guidance
- Finger guidance
- Typing feedback
- Error visualization
- Heatmap-style weakness analysis

## Learning Path

The learning system contains a progressive set of levels with progress and locked/completed states.

The intended learning flow is:

```text
Learn
  ↓
Practice
  ↓
Exercise
  ↓
Assessment
  ↓
Progress
```

## Adaptive Training

Adaptive training uses typing-performance data to focus practice on weaker areas.

Potential inputs include:

- Weak keys
- Error rates
- Recent performance
- Accuracy
- Speed
- Sample size

Arabic and English adaptive analysis should remain language-aware.

## Statistics

The statistics area includes historical performance information such as:

- Average WPM
- Best WPM
- Average accuracy
- Best accuracy
- Total tests
- Practice time
- Characters
- Errors
- Recent sessions
- Performance trends

## Achievements & XP

The gamification system includes:

- XP
- Achievements
- Progress toward achievements
- Unlock states

## Streaks

Keyora tracks practice streaks to encourage consistent learning.

The implementation should avoid counting multiple sessions on the same day as multiple streak days.

## Daily Challenge

A dedicated daily challenge provides an additional typing activity and performance target.

## Code Typing

Code typing provides syntax-oriented practice for:

- JavaScript
- Python
- C++
- HTML
- CSS

This mode emphasizes programming punctuation and symbols in addition to normal characters.

## Settings

Settings include user-facing controls for areas such as:

- Appearance
- Language
- Typing preferences
- Sound
- Accessibility
- Data

## Data Management

User progress is stored locally in the browser.

The application also supports data backup through export/import functionality.

## Responsive Experience

The UI is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

Typing is the primary interaction and should remain usable at every supported viewport size.

## Accessibility

The interface is designed with accessibility considerations including:

- Keyboard navigation
- Focus states
- Semantic controls
- Screen-reader-friendly status areas
- Reduced-motion support
- Non-color-only feedback

## Privacy Model

The core application is client-side. No backend is required for the primary typing workflow.

Local progress remains in the user's browser unless the user explicitly exports it or the application is later extended with a remote service.
