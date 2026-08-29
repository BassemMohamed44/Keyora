# Keyora Design System

## Design Direction

Keyora uses a light, modern, premium glass-inspired visual language.

The design goals are:

- Calm
- Focused
- Clear
- Modern
- Premium
- Accessible
- Suitable for learning

The typing experience must remain visually quiet even when other parts of the application use glass effects.

## Visual Principles

### 1. Focus First

The typing area is the primary action.

### 2. Glass With Restraint

Use translucency, blur, borders, and soft shadows selectively. Avoid turning every element into a glass panel.

### 3. Soft Color

Use light surfaces and restrained accent colors. Avoid neon or aggressive gaming aesthetics.

### 4. Strong Hierarchy

Users should immediately understand:

- Where they are
- What they should do
- Their current performance
- The next action

## Typography

Typography must support both:

- Arabic
- English

Arabic text should have appropriate line height and spacing.

Monospace typography is appropriate for Code Mode.

## Components

The visual language should remain consistent across:

- Navbar
- Buttons
- Cards
- Statistics
- Typing panels
- Keyboard keys
- Progress indicators
- Modals
- Forms
- Charts
- Notifications

## Interaction States

Every interactive component should account for:

```text
Default
Hover
Active
Focus
Disabled
Loading
Error
Success
```

## Accessibility

Visual design must not rely on color alone.

Important states should combine color with:

- Icon
- Label
- Shape
- Position
- Text

Respect `prefers-reduced-motion`.

## Responsive Rules

Do not simply scale desktop layouts down.

Use layout changes where necessary for:

- Navigation
- Statistics
- Typing area
- Virtual keyboard
- Charts
- Learning cards

## Performance

Avoid excessive use of:

- Large backdrop blur
- Heavy shadows
- Continuous animations
- Large animated backgrounds

The typing interaction should remain responsive on lower-end mobile devices.
