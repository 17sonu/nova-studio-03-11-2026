# Nova — Futuristic React Portfolio

A responsive portfolio starter built with React, Vite, React Three Fiber, Three.js, GLSL shaders, GSAP ScrollTrigger, and CSS glassmorphism.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Main features
- One persistent application-level WebGL canvas.
- Custom GLSL plasma shader with animated procedural noise, emissive colour, and Fresnel rim.
- Orbiting particle field and bloom post-processing.
- Delta-time gravity, floor collision, restitution, and decreasing bounce energy in `SpherePhysics.js`.
- Sphere target positions switch as the active section changes; the Contact section scales it fully out and Footer brings it back.
- Liquid glass navbar fill uses overall document scroll progress.
- Mobile navigation, active section highlighting, and responsive layouts.
- GSAP reveal animations use reversible toggle actions, so they repeat when scrolling in either direction.

## Personalize the demo
- Replace the NOVA name, copy, project cards, experience timeline, and social URLs.
- Update the contact email in `Contact.jsx`.
- The contact form is intentionally frontend-only. Connect a form service or backend before using it for real messages.
- The project cards currently use CSS-generated preview artwork; replace with real project screenshots when available.

## Notes
The sphere's bounce is a real delta-time physics simulation with gravity, collision response, and restitution. Its target position follows viewport-centered scroll progress, while the physics offset continues running. The Experience section fades the sphere out near its end; Contact and Footer do not display it. For production, tune `SpherePhysics.js` values and section coordinates in `SphereCanvas.jsx` for the exact visual composition you want.

If your device struggles with WebGL, lower the Canvas `dpr` range in `SphereCanvas.jsx` or reduce the particle count in `PlasmaSphere.jsx`.
