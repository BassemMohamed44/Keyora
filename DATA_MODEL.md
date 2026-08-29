# Keyora Data Model

## Storage

Keyora currently persists application state in browser LocalStorage.

Storage key:

```text
Keyora
```

A schema version is used to support future migration.

## Conceptual State

The exact implementation can evolve, but the application's state can be understood as these domains:

```text
Application State
├── Settings
├── Localization
├── User Progress
├── Learning Levels
├── Typing History
├── Error Statistics
├── Adaptive Training Data
├── Achievements
├── XP
├── Streak
└── Daily Challenge
```

## Typing Session

A completed session conceptually contains:

```text
language
mode
text
duration
characters
correct characters
errors
corrections
accuracy
raw WPM
adjusted WPM
CPM
timestamp
```

## Error Event

Error analysis should retain enough information to distinguish:

```text
expected character
actual character
language
mode
finger / key when known
timestamp
corrected state
```

This enables future language-aware and mode-aware analytics.

## Language Separation

Arabic and English should not silently contaminate each other's adaptive statistics.

Preferred conceptual structure:

```text
Statistics
├── English
│   ├── history
│   ├── key errors
│   └── performance
└── Arabic
    ├── history
    ├── key errors
    └── performance
```

An overall summary may combine them, but source data should remain distinguishable.

## Import / Export

Imported data must be treated as untrusted input.

Validate:

- Expected object shape
- Schema version
- Primitive types
- Array/object boundaries
- Numeric ranges
- Known enum values

Invalid data should fail safely rather than crashing the application.

## Migration

When the persisted structure changes:

```text
Old schema
   ↓
Migration
   ↓
Current schema
```

Never silently reset valid user progress merely because a new version of the application expects additional fields.

## Privacy

The current architecture does not require a remote database for core functionality.

LocalStorage data should be considered user-owned local application data and should not be exposed to third-party services without an explicit product decision.
