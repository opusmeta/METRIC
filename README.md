# Metric LP

Frontend implementation of the Metric landing page.

## Tech stack
* Next.js (App Router)
* React
* TypeScript
* CSS Modules

## Implementation details

### Styling & Layout
* Fully custom CSS Modules, no utility frameworks.
* Layout relies heavily on Flexbox and CSS Grid.
* Responsive design uses standard media query breakpoints (`max-width: 1320px`, `1024px`, `768px`, `480px`) to shift from multi-column grids to single-column stacked layouts. 
* Decorative elements like grid lines and side rails are implemented via border properties and SVG backgrounds, hidden on mobile for better space utilization.

### Animations
Animations are optimized for performance by prioritizing CSS transitions over JavaScript manipulation.
* **Reveals & Curtains:** Uses CSS `clip-path: inset(...)` to animate layers sliding over each other without layout thrashing.
* **Hover Effects:** Achieved by toggling `transform: translateX` and `clip-path` on absolutely positioned sibling elements.
* **Mobile Fallbacks:** For touch devices, hover states are polyfilled using simple React state (`activeRow`) mapped to CSS classes.
* **Text Scramble:** A custom React component handles the decoding text effect on intersection/scroll.
* **Rich Media:** Complex graphic animations use Rive (`@rive-app/react-canvas`) for lightweight, state-driven canvas rendering.

## Development
```bash
npm install
npm run dev
```
