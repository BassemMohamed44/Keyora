# Security Policy

## Supported Version

The latest version on the default branch is the primary supported version.

## Reporting a Vulnerability

Please do **not** disclose exploitable security details in a public GitHub issue.

When possible, provide:

- A clear description of the issue
- Steps to reproduce
- The affected file or component
- Expected behavior
- Actual behavior
- Browser and operating system
- Any relevant screenshots or minimal reproduction steps

If the issue could expose user data, execute unintended code, bypass application protections, or affect stored user data, treat it as a security report rather than a normal bug report.

## Scope

Keyora is primarily a client-side application. Areas of particular interest include:

- Unsafe DOM insertion
- User-controlled text handling
- LocalStorage parsing and migration
- Import/export validation
- Cross-site scripting risks
- Dependency or third-party resource risks
- Unexpected data loss

Please avoid submitting real personal data in reports.
