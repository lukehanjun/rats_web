# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-06-07
- Primary product surfaces: GitHub Pages project landing page in `docs/index.html`
- Evidence reviewed: `paper_v3/final/`, final paper source and figures in `paper_v3/corl_2026_template_submission/`, repository README and documentation, ECHO-Bench and CapGym project-page references

## Brand
- Personality: Curious, capable, playful, and technically rigorous
- Trust signals: Final-paper figures, explicit provenance labels, downloadable paper and appendix, direct code link
- Avoid: Generic corporate styling, oversized marketing claims, unverified local-evaluation claims, visual clutter

## Product goals
- Goals: Explain RATs quickly, lead with robot demonstrations, communicate the method, summarize paper-reported evaluation, and expose locally grounded play analysis
- Non-goals: Reproduce the full paper, host an interactive benchmark, or imply that unavailable evaluation artifacts were independently verified on this server
- Success signals: A visitor can understand the central idea in under a minute and can reach the paper, appendix, code, method, and results without searching

## Personas and jobs
- Primary personas: Robotics researchers, embodied-agent researchers, reviewers, and prospective collaborators
- User jobs: Watch qualitative results, understand the contribution, inspect headline results, and find primary resources
- Key contexts of use: Desktop research browsing, mobile link sharing, and GitHub Pages hosting

## Information architecture
- Primary navigation: Demos, Abstract, Method, Results, Play Analysis, Resources
- Core routes/screens: Single-page landing page with anchored sections
- Content hierarchy: Demonstrations first, then framing, method, quantitative results, locally grounded analysis, and resources

## Design principles
- Lead with evidence: Put the result reel and paper figures ahead of long explanation
- Separate provenance: Clearly distinguish paper-reported evaluation from locally grounded play-run analysis
- Make complexity legible: Use a small number of strong diagrams, stat cards, and concise prose
- Tradeoffs: Prefer a focused single page over exhaustive appendix content

## Visual language
- Color: Deep navy `#111844`, indigo `#4b5694`, steel blue `#7288ae`, warm paper `#eae0cf`, and off-white surfaces
- Typography: Avenir-first system sans for body and interface; restrained serif accents only for editorial emphasis
- Spacing/layout rhythm: Generous section spacing, compact cards, max-width reading columns
- Shape/radius/elevation: Rounded panels with fine borders and soft shadows
- Motion: Subtle reveal and hover transitions only; disabled under reduced-motion preferences
- Imagery/iconography: Final-paper diagrams, experiment images, and video; minimal line icons

## Components
- Existing components to reuse: Final-paper figures and videos
- New/changed components: Sticky navigation, hero, video stage, resource buttons, metric cards, method cards, analysis panels, provenance labels
- Variants and states: Primary/secondary buttons, light/dark panels, compact/feature metric cards
- Token/component ownership: CSS custom properties in `docs/styles.css`

## Accessibility
- Target standard: WCAG 2.1 AA where practical
- Keyboard/focus behavior: Visible focus rings and keyboard-accessible navigation
- Contrast/readability: High-contrast body text; muted text remains readable
- Screen-reader semantics: Semantic landmarks, descriptive headings, alt text, and video fallback text
- Reduced motion and sensory considerations: Respect `prefers-reduced-motion`

## Responsive behavior
- Supported breakpoints/devices: Modern desktop, tablet, and mobile browsers
- Layout adaptations: Multi-column grids collapse to one column; nav links simplify on narrow screens
- Touch/hover differences: Hover effects are decorative and never required

## Interaction states
- Loading: Native video controls and poster image preserve context while media loads
- Empty: Not applicable
- Error: Video fallback links to the source file
- Success: Resource links open the requested artifact
- Disabled: Not applicable
- Offline/slow network, if applicable: Static page remains readable before large media loads

## Content voice
- Tone: Direct, precise, and optimistic
- Terminology: Use `RATs`, “Robotic Agent Team,” “play-time,” “learned skills,” and “skill library”
- Microcopy rules: Label quantitative claims by provenance; avoid superlatives not supported by the paper

## Implementation constraints
- Framework/styling system: Dependency-free HTML, CSS, and JavaScript
- Design-token constraints: Use the project palette through CSS custom properties
- Performance constraints: Browser-compatible H.264 demo reel below GitHub's 100 MB per-file limit; lazy-load lower-page imagery
- Compatibility constraints: GitHub Pages-compatible relative URLs; no build step
- Test/screenshot expectations: Validate links/assets, HTML structure, responsive CSS, and local HTTP serving

## Open questions
- [ ] Replace anonymous/pending author metadata and citation when the public author list is ready.
- [ ] Add a public project URL or hosted video mirror if repository bandwidth becomes limiting.
