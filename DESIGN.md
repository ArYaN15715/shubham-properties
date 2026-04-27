# Design Brief

**Direction:** Premium hyperlocal real estate brand blending local trust with investor appeal. Clean, modern, aspirational but not corporate. Purple + gold creates distinctive identity that stands out from generic real estate sites.

**Tone:** Authoritative, trustworthy, growth-focused. Speaks to both investors (GIFT City opportunity) and local buyers (Gandhinagar specialist).

**Differentiation:** Bold Royal Purple backgrounds with Golden Yellow accents create immediate brand recognition. Soft card shadows and generous spacing signal premium quality. Gold highlights on icons/property badges avoid gaudiness while maintaining wealth/growth signaling.

## Palette

| Token | OKLCH | Hex Equiv | Usage |
|-------|-------|-----------|-------|
| primary | 0.285 0.18 290 | #2B0A4D | Hero, headers, primary UI, sidebar |
| accent | 0.77 0.13 70 | #F4B400 | Highlights, property badges, secondary CTA, icons |
| cta-bright | 0.85 0.15 70 | #FFD54F | Primary buttons, hover states (derived from accent) |
| foreground | 0.12 0 0 | #1A1A1A | Text on light backgrounds |
| background | 0.98 0 0 | #FFFFFF | Page background, card surfaces |
| muted | 0.92 0 0 | #EBEBEB | Alternate sections, dividers |
| border | 0.88 0 0 | #E0E0E0 | Borders, subtle dividers |

**Dark Mode:** Primary shifted to 0.6 0.14 290 for dark backgrounds; accent remains vibrant at 0.82 0.12 70.

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Bricolage Grotesque | Headlines, hero text, property tags, CTAs (bold, geometric) |
| Body | Nunito | Paragraph text, descriptions, secondary info (warm, highly legible) |
| Mono | Geist Mono | Code, technical specs, backup display role |

**Hierarchy:** H1 (2.5rem), H2 (2rem), H3 (1.5rem), body (1rem), small (0.875rem).

## Elevation & Depth

| Layer | Shadow | When |
|-------|--------|------|
| card | 0 2px 8px rgba(0,0,0,0.08) | Property cards, input fields |
| elevated | 0 8px 24px rgba(0,0,0,0.12) | Hover states, modals, floating elements |
| none | flat | Hero sections, section backgrounds |

**No drop shadows on sections.** Cards and interactive elements only.

## Structural Zones

| Zone | Background | Text | Border/Details |
|------|------------|------|-----------------|
| Header/Nav | primary (#2B0A4D) | white | bottom border in accent-gold |
| Hero | primary gradient or solid | white/accent | none; accent bar accent separator |
| Card | background (white) | foreground | left accent stripe (4px, gold) |
| Section Alt | muted (light grey) | foreground | none |
| Footer | primary or charcoal | white | top border in accent-gold |
| Button (Primary) | accent (gold) | foreground (dark) | none |

## Component Patterns

- **Property Cards:** White surface, soft shadow, gold left stripe (4px), headline in display font, price in accent, "View Details" CTA in bright yellow.
- **Buttons:** Primary = bright yellow background, dark text, rounded (12px), font-display bold. Secondary = border-primary, text-primary.
- **Badges:** "Hot Deal" / "Investment Opportunity" = background accent, text foreground.
- **Input Fields:** bg-background, border-border, focus ring in accent.

## Spacing & Rhythm

- **Gutters:** 16px (mobile), 24px (tablet), 32px (desktop).
- **Vertical Rhythm:** 24px between major sections, 16px between cards.
- **Border Radius:** Default 12px (lg), 8px (md), 4px (sm), 0 (none).

## Motion

- **Transition Default:** all 0.3s cubic-bezier(0.4, 0, 0.2, 1).
- **Entry Animations:** slide-up (500ms) for cards on scroll, fade-in (400ms) for text.
- **Hover States:** buttons scale-95 on active, opacity-90 on hover.
- **No bounce/overshoot.** Easing is subtle and professional.

## Constraints

- No gradients on text (backgrounds only, sparingly).
- No rainbow palettes; max 5 colors (primary, accent, foreground, muted, border).
- No generic shadows or artificial glow effects.
- Minimum contrast: AA+ (0.7 L difference for text on background).
- Mobile-first layout; all sections responsive to tablet/desktop.

## Signature Detail

**Gold accent stripe on property cards.** 4px left border in --accent (gold) creates instant visual scannability and reinforces wealth/growth signal without being intrusive. Cards feel premium because of this single intentional detail, not because of gradients or excessive depth.

## Assets

Generated preview: `.platform/design/preview-1777288593520.jpg`
Fonts: BricolageGrotesque, Nunito, GeistMono (bundled in public/assets/fonts/)
Micro-interactions: slide-up entry, fade-in text, scale-95 button press
