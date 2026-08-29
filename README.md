# Keyora

**Keyora** is a browser-based typing learning platform focused on improving typing speed and accuracy in **Arabic and English**.

It combines typing tests, progressive learning levels, adaptive practice, error analysis, keyboard visualization, statistics, achievements, streaks, daily challenges, custom articles, and code typing in one lightweight client-side application.

## Highlights

- Arabic + English interface
- Arabic and English typing practice
- RTL / LTR support
- Raw WPM, Adjusted WPM, CPM and accuracy metrics
- Progressive learning path with 13 levels
- Adaptive training based on typing weaknesses
- Keyboard heatmap and problematic-key analysis
- Performance charts and test history
- XP, achievements and streak tracking
- Daily challenge
- Code typing for JavaScript, Python, C++, HTML and CSS
- Custom article typing mode
- Local browser storage with export/import support
- Accessibility and reduced-motion support
- Responsive layout for desktop, tablet and mobile

## Tech Stack

Keyora is intentionally lightweight and does not require a frontend framework or build system.

- HTML5
- CSS3
- Vanilla JavaScript
- SVG-based visualizations
- Browser LocalStorage
- Google Fonts: Cairo and JetBrains Mono

## Project Structure

```text
Keyora/
├── index.html
├── main.js
├── style.css
├── README.md
├── LICENSE
├── SECURITY.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── .gitignore
├── .nojekyll
└── .github/
    ├── workflows/
    │   └── pages.yml
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   └── feature_request.md
    └── PULL_REQUEST_TEMPLATE.md
```


## Documentation

- [Architecture](ARCHITECTURE.md) — application structure and data flow
- [Features](FEATURES.md) — current product capabilities
- [Data Model](DATA_MODEL.md) — persisted state and data boundaries
- [Testing Guide](TESTING.md) — manual, automated, browser and accessibility testing
- [Design System](DESIGN_SYSTEM.md) — UI/UX principles and visual rules
- [Roadmap](ROADMAP.md) — prioritized future development
- [Code Review Guide](CODE_REVIEW.md) — review standards for contributors
- [Release Checklist](RELEASE_CHECKLIST.md) — pre-release verification

## Run Locally

No installation or build step is required.

### Option 1 — Open directly

Open `index.html` in a modern browser.

### Option 2 — Local server

For a more realistic web-server environment:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Data & Privacy

Keyora is designed as a client-side application. User progress and preferences are stored locally in the browser using LocalStorage.

The project does not require a backend for its core typing functionality.

Use the built-in export/import functionality to back up local progress before clearing browser data.

## Browser Support

Use a recent version of:

- Google Chrome / Chromium
- Microsoft Edge
- Mozilla Firefox
- Safari

Some visual or browser APIs may vary across browsers.

## Deployment

Because Keyora is a static website, it can be deployed to:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel static hosting
- Any standard static web server

The repository includes a GitHub Pages workflow at:

```text
.github/workflows/pages.yml
```

## Contributing

Bug reports, accessibility improvements, Arabic typing improvements, performance fixes, and well-scoped feature proposals are welcome.

Before opening a pull request, read [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

For security-related reports, please read [SECURITY.md](SECURITY.md) instead of publishing sensitive details in a public issue.

## License

Keyora is released under the MIT License. See [LICENSE](LICENSE).
