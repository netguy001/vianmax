# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for **Vianmax Techno Ventures Pvt. Ltd.** (https://www.vianmax.com) — a custom software, automation, and training company based in India.

**No build tools, no package manager, no framework.** Files are served directly.

## Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that SCPs all files to the Contabo server at `/home/vianmax/htdocs/www.vianmax.com`. Required secrets: `SERVER_IP`, `SERVER_USER`, `SERVER_SSH_KEY`.

To preview locally, open any `.html` file directly in a browser or use a simple static server:
```bash
python -m http.server 8080
```

## File Structure

| File | Role |
|------|------|
| `styles.css` | Single shared stylesheet for all 5 pages |
| `index.html` | Homepage |
| `about.html` | About page |
| `services.html` | Services page |
| `training.html` | Training page |
| `contact.html` | Contact page |
| `logo.png` / `favicon.png` | Brand assets |
| `vianmax-production.html` / `vianmax-production-v2.html` | Legacy single-file versions (do not edit) |

## Architecture

- **CSS design tokens** are all in `:root` inside `styles.css`. Primary brand color is `--red: #E3001B`. Always use CSS custom properties — never hardcode values that exist as tokens.
- **JavaScript** is vanilla ES5-compatible, written as inline `<script>` blocks at the bottom of each HTML file. No external JS libraries.
- **Shared components** (navbar, footer, chat widget, cookie banner, back-to-top, scroll progress bar) are duplicated across all 5 pages — changes must be applied to each file manually.
- **Images** are loaded from Unsplash CDN with `?w=` and `q=` parameters for sizing. See `DOCUMENTATION.md` §5 for the full list of photo IDs per page.
- **Fonts** are loaded from Google Fonts CDN (`Inter` for all main pages; `Rajdhani` is legacy-only).

## Key Conventions

- Container max-width: `1140px` (`--container`); narrow variant: `840px` (`--container-sm`)
- Nav height: `72px` (`--nav-height`)
- Breakpoints: `1024px` (tablet), `768px` (mobile nav), `480px` (small phone)
- Stat counters and reveal animations use `IntersectionObserver`; always add the `.reveal` class to new sections that should animate in on scroll
- The navbar gains a `.scrolled` class at 60px scroll depth (solidifies background)
- All decorative/icon elements should have `aria-hidden="true"`; text for screen readers goes in `.sr-only` spans

## Detailed Reference

See `DOCUMENTATION.md` for the complete design token reference, per-page section breakdown, animation specs, SEO metadata structure, and accessibility checklist.
