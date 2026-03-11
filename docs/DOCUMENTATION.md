# VIANMAX — Complete Website Documentation

> **Company:** Vianmax Techno Ventures Pvt. Ltd.  
> **Domain:** https://www.vianmax.com  
> **Founded:** 2021  
> **Location:** India  
> **Last Updated:** March 2026

---

## 1. FILE INVENTORY

| File | Type | Purpose | ~Lines |
|------|------|---------|--------|
| `index.html` | HTML | Homepage — hero slider, stats, services teaser, testimonials, CTA | ~1,700 |
| `about.html` | HTML | About — mission, values, process steps, stats counter | ~950 |
| `services.html` | HTML | Services — tabbed cards, promo banners, FAQ accordion | ~1,200 |
| `training.html` | HTML | Training — programs, testimonials carousel, course listing | ~1,000 |
| `contact.html` | HTML | Contact — form, office hours, contact channels | ~1,000 |
| `styles.css` | CSS | Global shared stylesheet — tokens, components, responsive | ~1,550 |
| `logo.png` | Image | Company logo (used in header & footer) | — |
| `favicon.png` | Image | Browser tab favicon (red brand icon) | — |
| `vianmax-production.html` | HTML | Legacy single-page production version (v1) | ~1,400 |
| `vianmax-production-v2.html` | HTML | Legacy single-page production version (v2) | ~1,300 |

---

## 2. DESIGN TOKENS (CSS Custom Properties)

All tokens are declared in `:root` inside `styles.css`.

### Colors

```
--red:          #E3001B       ← Primary brand red
--red-dark:     #c10017       ← Hover / pressed states
--red-light:    #ff2e44       ← Lighter accent
--red-subtle:   rgba(227,0,27, 0.06)

--black:        #0a0a0a
--dark:         #111113       ← Dark section backgrounds
--white:        #ffffff
--off-white:    #f9f9fb       ← Alternating section fill

--gray-50:      #fafafb
--gray-100:     #f2f2f5
--gray-200:     #e4e4e9
--gray-300:     #d0d0d8
--gray-400:     #9c9caa
--gray-500:     #747482
--gray-600:     #53535f
--gray-700:     #3a3a44
--gray-800:     #27272e

--text:           #1a1a22     ← Primary body text
--text-secondary: #555564     ← Descriptions
--text-muted:     #888899     ← Captions, labels
--border:         #e8e8ed     ← Card/section borders
--border-light:   #f0f0f4     ← Subtle borders
```

### Shadows

```
--shadow-xs:   0 1px 2px rgba(0,0,0, 0.04)
--shadow-sm:   0 1px 4px rgba(0,0,0, 0.06)
--shadow-md:   0 4px 20px rgba(0,0,0, 0.07)
--shadow-lg:   0 12px 48px rgba(0,0,0, 0.1)
--shadow-xl:   0 24px 64px rgba(0,0,0, 0.14)
--shadow-red:  0 8px 30px rgba(227,0,27, 0.22)
```

### Border Radius

```
--radius-sm:   8px
--radius-md:   12px
--radius-lg:   16px
--radius-xl:   24px
--radius-2xl:  32px
--radius-full: 9999px        ← Pills, circles
```

### Easing & Transitions

```
--ease:       cubic-bezier(0.4, 0, 0.2, 1)
--ease-out:   cubic-bezier(0, 0, 0.2, 1)
--transition: 0.24s cubic-bezier(0.4, 0, 0.2, 1)
```

### Layout

```
--container:    1140px
--container-sm: 840px
--nav-height:   72px
```

---

## 3. TYPOGRAPHY

### Primary Font — Inter

- **Source:** Google Fonts (`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800`)
- **Weights:** 300 (Light) · 400 (Regular) · 500 (Medium) · 600 (SemiBold) · 700 (Bold) · 800 (ExtraBold)
- **Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Rendering:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility`

### Font Usage

| Element | Size | Weight | Additional |
|---------|------|--------|------------|
| Hero h1 | `clamp(40px, 7vw, 80px)` | 700 | Letter-spacing: -0.025em |
| Section titles | Inherited from h2 base | 700 | — |
| Section eyebrow | 11.5px | 700 | Uppercase, tracking 0.16em |
| Body text | 16px (base) | 400 | Line-height: 1.6 |
| Section description | 16.5px | 400 | Line-height: 1.75 |
| Card titles | — | 600 | — |
| Nav links | 14.5px | 500 | Tracking 0.01em |
| Stat numbers | 40px | 700 | Tracking -0.02em |
| Stat labels | 12.5px | 500 | Tracking 0.03em |
| Footer links | 14px | 400 | — |
| Buttons | 14.5px | 600 | Tracking 0.01em |

### Secondary Font — Rajdhani (legacy pages only)

- **Source:** Google Fonts
- **Weights:** 500, 600, 700
- **Used in:** `vianmax-production.html`, `vianmax-production-v2.html`

---

## 4. LOGO

### Primary Logo

- **File:** `logo.png` (PNG format)
- **CSS Class:** `.logo-img`
- **Header size:** height `56px`, `object-fit: contain`
- **Footer size:** height `46px`, `object-fit: contain`
- **Footer filter:** `filter: brightness(0) invert(1)` — renders the logo white on the dark footer

### Logo in Legacy Pages

- **Logo Mark:** Red square badge (38×38px) with "Vi" text in Rajdhani
- **Logo Name:** "Vian**max**" — "max" styled in red (`#E3001B`)

### Favicon

- **File:** `favicon.png` (PNG format)
- **HTML:** `<link rel="icon" type="image/png" href="favicon.png">`
- **Theme color:** `<meta name="theme-color" content="#E3001B">`
- **Present on:** All 5 main pages

---

## 5. STOCK IMAGES (Unsplash)

| Image URL | Page | Section |
|-----------|------|---------|
| `photo-1451187580459-43490279c0fa?w=1920&q=80` | index.html | Hero Slide 1 — Earth/data globe |
| `photo-1518770660439-4636190af475?w=1920&q=80` | index.html | Hero Slide 2 — Circuit board |
| `photo-1522071820081-009f0129c71c?w=1920&q=80` | index.html | Hero Slide 3 — Team collaboration |
| `photo-1497366216548-37526070297c?w=1400&q=80` | All inner pages | Page hero background |
| `photo-1553877522-43269d4ea984?w=800&q=80` | about.html | About detail visual |
| `photo-1499439629118-641bd28dd212?w=1400&q=80` | about.html | Process section background |
| `photo-1611974789855-9c2a0a7236a3?w=800&q=80` | services.html | Promo Card — Algo Trading |
| `photo-1558494949-ef010cbdcc31?w=800&q=80` | services.html | Promo Card — Data/Campaign |
| `photo-1551288049-bebda4e38f71?w=800&q=80` | services.html | Promo Card — n8n Automation |
| `photo-1524178232363-1fb2b075b655?w=800&q=80` | training.html | Training visual |
| `photo-1519389950473-47ba0277781c?w=800&q=80` | training.html | Programs section background |

All images use Unsplash CDN with parametrised sizing (`w=` width, `q=` quality).

---

## 6. PAGE-BY-PAGE STRUCTURE

### index.html (Homepage)

**Title:** Vianmax – Where Vision Becomes Reality | Custom Software, Automation & Training  
**Canonical:** https://www.vianmax.com/

| Section | Background | Key Content |
|---------|------------|-------------|
| Navbar | White (transparent until scroll) | Logo, 4 nav links, CTA button |
| Hero | Dark with 3 sliding backgrounds | 3-slide carousel, eyebrow, h1, description, tag pills, action buttons, dot navigation |
| Stats Band | White | 4 counters: 50K+ People Surveyed, 200K+ Trained, 80+ Clients, 120+ Projects |
| Quick Access | Off-white | 8 icon cards linking to sections (Software, Mobile, Automation, Algo, Web, Training, Consulting, Contact) |
| Trusted By | White | Marquee scrolling company names |
| About Teaser | White | 2-col: code-block visual + features list, "5+ Years" badge |
| Services Teaser | Off-white | 3-col cards: Custom Software, Mobile Apps, Algo Trading |
| Testimonials | White | 3-col cards: Rajesh/Vishwas, MM. Reddy/S QTM, Sam/Cloud9 |
| CTA Band | Dark blue gradient | "Ready to Build Something Exceptional?" |
| Footer | Dark | 4-col: brand, quick links, services, newsletter |

**JS Features:** Hero slider (3.5s autoplay, touch swipe, keyboard nav), stat counters, scroll progress bar, reveal animations, chat widget, cookie banner, mobile menu

---

### about.html (About Page)

**Title:** About – Vianmax Techno Ventures  

| Section | Background | Key Content |
|---------|------------|-------------|
| Page Hero | Dark gradient | Breadcrumb, "About Vianmax" h1 |
| About Detail | Off-white | 2-col: code visual with "5+ Years" badge + "Who We Are" text + 3 feature items |
| Mission/Values | White | 3-col cards: Engineering Excellence, Client Partnership, Continuous Innovation |
| Stats Band | Dark | Same 4 stat counters |
| Process | Dark gradient | 4 steps: Research → Blueprint → Build → Maintain |
| CTA Band | Dark | "Let's Work Together" |
| Footer | Dark | Same shared footer |

**JS Features:** Stat counters, reveal animations, scroll progress, chat widget, cookie banner

---

### services.html (Services Page)

**Title:** Services – Vianmax Techno Ventures  

| Section | Background | Key Content |
|---------|------------|-------------|
| Page Hero | Dark gradient | "Our Services" h1 |
| Service Tabs | Off-white | Tab bar: All / Software / Mobile & Web / Automation / Training |
| Service Cards | Off-white | 7 cards: Custom Software, Mobile Apps, Web Dev, Algo Trading, n8n Automation, Smart ATM, Campaign Intelligence |
| Promo Banners | White | 3 dark promo cards with watermarks (ALGO, DATA, n8n) |
| FAQ | White | 5-item accordion: timelines, startups vs enterprise, tech stack, post-launch support, pricing |
| CTA Band | Dark | "Ready to Get Started?" |
| Footer | Dark | Same shared footer |

**JS Features:** Tab switching with panel animation, FAQ accordion, reveal animations, chat widget

---

### training.html (Training Page)

**Title:** Training – Vianmax Techno Ventures  

| Section | Background | Key Content |
|---------|------------|-------------|
| Page Hero | Dark gradient | "Training & Academy" h1 |
| Training Overview | White | 2-col: curriculum visual + "Real-World Skills" text + 3 numbered points |
| Programs Grid | Off-white | 3 cards: Corporate Training, Technical Workshops, Internship Program |
| Testimonials | White | Horizontal carousel with prev/next buttons + dot nav |
| CTA Band | Dark | "Start Your Learning Journey" |
| Footer | Dark | Same shared footer |

**JS Features:** Testimonials carousel (prev/next/dots, auto-restarts timer), reveal animations, chat widget

---

### contact.html (Contact Page)

**Title:** Contact – Vianmax Techno Ventures  

| Section | Background | Key Content |
|---------|------------|-------------|
| Page Hero | Dark gradient | Breadcrumb, "Get in Touch" h1 |
| Contact Layout | Off-white | 2-col: contact channels + office hours (left) / contact form (right) |
| CTA Band | Dark | "Ready to Build Something Great?" |
| Footer | Dark | Same shared footer |

**Contact Channels:**
- Phone: +91-9363135599
- Email: info@vianmax.com  
- Support: support@vianmax.com

**Office Hours:**
- Mon–Fri: 9:00 AM – 6:00 PM IST
- Sat: 10:00 AM – 2:00 PM IST
- Sun: Closed

**Form Fields:** Name, Email, Subject (7 options dropdown), Message, Submit  
**JS Features:** Form validation, success message, chat widget

---

## 7. SHARED COMPONENTS

### Navigation Bar

- **Height:** 72px (`--nav-height`)
- **Behavior:** Sticky top, adds `.scrolled` class at 60px scroll (background solidifies, shadow appears)
- **Desktop Links:** Home, About, Services, Training, Get in Touch (CTA)
- **Mobile:** Hamburger icon at ≤768px → full-screen overlay menu
- **Active State:** Red underline indicator via `::after` pseudo-element

### Chat Widget

- **Position:** Fixed bottom-right (28px inset)
- **Toggle:** 54×54px red circle with message icon + pulse animation
- **Panel Options:** Call Us Now, Email Us, WhatsApp Us, Get Consultation
- **WhatsApp:** https://wa.me/919363135599

### Back-to-Top Button

- **Position:** Fixed bottom-left (28px inset)
- **Appears:** After 300px scroll
- **Style:** 40×40px dark circle → red on hover

### Scroll Progress Bar

- **Position:** Fixed top, 2px height, z-index 10001
- **Color:** Red (`--red`)
- **Function:** Width scales from 0% to 100% based on scroll position

### Cookie Banner

- **Trigger:** 2 seconds after page load (if not previously accepted)
- **Storage:** `localStorage.setItem('vianmax_cookies', 'set')`
- **Options:** Accept (red) / Decline (transparent)

### Footer

- **4-column layout:** Brand + contact, Quick Links, Services, Newsletter
- **Newsletter:** Email input with submit button, validated with regex
- **Social Links:** LinkedIn, X (Twitter), Instagram, YouTube
- **Copyright:** © 2026 Vianmax Techno Ventures Pvt. Ltd.
- **Bottom Links:** Privacy Policy, Terms, Support

---

## 8. RESPONSIVE BREAKPOINTS

```
1024px — Tablets/small desktops
  └ Grids: 3-col → 2-col
  └ Footer grids adapt

768px — Tablets/phones  
  └ Nav links hidden, hamburger shown  
  └ Stats grid: 4-col → 2-col  
  └ Hero: smaller font sizes, full-width buttons  
  └ Section padding reduced (80px → 64px)  
  └ About/services grids → 1-col  

480px — Small phones  
  └ Stats grid → 1-col  
  └ Container padding: 28px → 16px  
  └ Hero h1: 30px  
  └ Marquee text shrinks  

prefers-reduced-motion: reduce  
  └ All animations, transitions disabled  
  └ Marquee paused  
  └ scroll-behavior: auto  
```

---

## 9. CSS ANIMATIONS

| Name | Duration | Usage |
|------|----------|-------|
| `slideUp` | 0.7s ease | Hero content entrance (staggered 0–0.4s delays) |
| `glow` | 2s infinite | Hero eyebrow red dot pulse |
| `blink` | 1s infinite | Code cursor in about visual |
| `marquee` | 25s linear infinite | Trusted-by scrolling ticker |
| `ringPulse` | 2s infinite | Chat widget button pulse ring |
| `fadeIn` | 0.2s ease | Mobile menu opening |
| `fadeSlideUp` | 0.25s ease | Chat panel opening |

### JS-Driven Animations

- **Stat counters:** 2000ms cubic ease-out, triggered by IntersectionObserver (50% threshold)
- **Reveal on scroll:** `.reveal` elements fade+slide with IntersectionObserver (12% threshold), stagger via `.delay-1` through `.delay-5`
- **Hero slider:** 0.5s opacity crossfade, 5s Ken Burns zoom (scale 1.06), 3.5s autoplay interval
- **Training carousel:** 0.5s transform slide

---

## 10. SEO & METADATA

### Common Meta Tags (all pages)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#E3001B">
```

### Open Graph (index.html)

```
og:type        = website
og:title       = Vianmax – Where Vision Becomes Reality
og:description = Custom software, intelligent automation...
og:url         = https://www.vianmax.com/
og:site_name   = Vianmax
og:locale      = en_IN
```

### Twitter Card (index.html)

```
twitter:card        = summary_large_image
twitter:title       = Vianmax – Where Vision Becomes Reality
twitter:description = Custom software, intelligent automation...
```

### JSON-LD Structured Data (index.html)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vianmax Techno Ventures Pvt. Ltd.",
  "url": "https://www.vianmax.com",
  "logo": "https://www.vianmax.com/logo.png",
  "email": "info@vianmax.com",
  "telephone": "+91-9363135599",
  "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  "areaServed": "Worldwide",
  "foundingDate": "2021"
}
```

---

## 11. ACCESSIBILITY

| Feature | Implementation |
|---------|----------------|
| Skip link | `<a href="#main-content" class="skip-link">Skip to main content</a>` |
| Focus indicator | `2px solid var(--red)` outline with 2px offset on `:focus-visible` |
| Semantic HTML | `<nav>`, `<main>`, `<section>`, `<footer role="contentinfo">` |
| ARIA landmarks | `aria-label` on all nav, dialog, and section elements |
| ARIA states | `aria-expanded` on toggles, `aria-selected` on tabs |
| Screen reader | `.sr-only` class for visually hidden text; `aria-live="polite"` on form messages |
| Keyboard nav | Tab, Enter/Space, Escape (close menus), Arrow keys (carousel/slides) |
| Decorative items | `aria-hidden="true"` on grid patterns, icons, watermarks |
| Form labels | `<label for="...">` on all inputs; `autocomplete` attributes |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations |
| Color contrast | Text on white ≈17:1; white on red ≈5.2:1 (meets WCAG AA) |
| Selection color | Brand-tinted text selection (`rgba(227,0,27, 0.14)`) |
| Custom scrollbar | 8px slim scrollbar; red on hover |

---

## 12. CONTACT INFORMATION

| Channel | Value |
|---------|-------|
| **Phone** | +91-9363135599 |
| **Email (General)** | info@vianmax.com |
| **Email (Support)** | support@vianmax.com |
| **WhatsApp** | https://wa.me/919363135599 |
| **Academy Portal** | https://academy.vianmax.com |
| **LinkedIn** | # (placeholder) |
| **X (Twitter)** | # (placeholder) |
| **Instagram** | # (placeholder) |
| **YouTube** | # (placeholder) |

### Office Hours

| Day | Hours |
|-----|-------|
| Monday – Friday | 9:00 AM – 6:00 PM IST |
| Saturday | 10:00 AM – 2:00 PM IST |
| Sunday | Closed |

---

## 13. TECHNOLOGY STACK

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 (semantic) |
| **Styling** | CSS3 with custom properties, no preprocessor |
| **JavaScript** | Vanilla JS (ES5-compatible IIFE pattern) |
| **Fonts** | Google Fonts CDN |
| **Images** | Unsplash CDN (parametrised) |
| **Framework** | None — hand-coded static site |
| **Build Tool** | None — serves directly from HTML files |
| **Package Manager** | None |

---

## 14. BROWSER SUPPORT

- CSS custom properties (modern browsers)
- IntersectionObserver (Chrome 51+, Firefox 55+, Safari 12.1+)
- `clamp()` function (Chrome 79+, Firefox 75+, Safari 13.1+)
- `scroll-behavior: smooth` (Chrome 61+, Firefox 36+)
- `100svh` unit (Chrome 108+, Firefox 101+, Safari 15.4+)
- Graceful fallback via `<noscript>` styles for disabled JS

---

*This document is auto-generated. Update when significant changes are made to the codebase.*
