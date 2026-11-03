# Project Progress — Nova Plasma Portfolio

## Goal
Create a complete, runnable futuristic React portfolio based on the supplied master prompt: a persistent 3D plasma sphere with gravity-based bouncing and section-aware positioning, plus a scroll-progress liquid glass navbar.

## Requirements and decisions
- React + Vite; separate CSS file for each visual component.
- Three.js through React Three Fiber; custom GLSL shader for the plasma sphere.
- One persistent Canvas mounted at the application level.
- Gravity, velocity, delta time, floor collision, restitution, and energy loss implemented in `SpherePhysics.js`.
- Section-aware sphere positions; completely hidden in Contact and visible again in Footer.
- Scroll-progress liquid fill in fixed glass navbar.
- GSAP reveal animations configured to reverse and replay on re-entry.
- Responsive layouts and mobile menu.
- Contact form is a frontend demo only; no backend was requested.
- Generic NOVA portfolio copy and sample project/experience content are placeholders to personalize.

## Implemented
- [x] Vite/React project scaffold and dependencies.
- [x] Persistent React Three Fiber canvas.
- [x] Procedural animated plasma GLSL material with Fresnel rim and pulsing.
- [x] Orbiting particle field, point light, and bloom.
- [x] Delta-time gravity / bounce physics with collision and restitution.
- [x] Active-section target positions and Contact hide / Footer return.
- [x] Liquid glass navbar with scroll percentage fill and active link state.
- [x] Desktop navigation and mobile hamburger menu.
- [x] Hero, About, Expertise, Projects, Experience, Contact, Footer.
- [x] Repeatable GSAP reveal animations.
- [x] Component-specific CSS files.
- [x] README with setup and build commands.

## Current status
Source project generated. A dependency installation/build attempt was started, but `npm install` did not complete before the environment timeout, so a production build and browser visual test remain unverified. The custom R3F plasma material is registered with `extend()` in the source.

## Important files
- `src/App.jsx` — page composition, scroll progress, active section observer, sphere section targets.
- `src/components/Sphere/SphereCanvas.jsx` — persistent WebGL canvas and post-processing.
- `src/components/Sphere/PlasmaSphere.jsx` — shader mesh, animation, particles.
- `src/components/Sphere/PlasmaShader.js` — GLSL vertex and fragment shaders.
- `src/components/Sphere/SpherePhysics.js` — gravity and bounce simulation.
- `src/components/Navbar/Navbar.jsx` / `.css` — liquid glass navigation.
- `src/components/ScrollAnimations/ScrollAnimations.jsx` — repeatable scroll reveals.
- `README.md` — installation and usage.
- `PROGRESS.md` — this handoff document.

## Run
```bash
npm install
npm run dev
```

## Verify next
1. Install dependencies and run `npm run build`.
2. Open the Vite URL in a desktop browser and check the sphere's size/position against all sections.
3. Check mobile menu, mobile sphere placement, Contact hide, and Footer re-entry.
4. If the shader material is not registered as a JSX intrinsic in the installed R3F version, use `extend({ PlasmaMaterial })` and `<plasmaMaterial />` registration as required by the runtime version.
5. Tune gravity, restitution, sphere scale, bloom, and section coordinates on target hardware.
6. Replace placeholder copy, email, social URLs, and project cards with real portfolio content.
7. Connect the contact form to a real form provider if needed.

## Continuation instructions
Continue from this folder or upload the ZIP and `PROGRESS.md` into a new conversation. The source of truth is the code in this project folder; do not recreate the project from the prompt unless necessary.


## Update — sphere path revision (2026-11-03)

### User-requested behaviour applied
- Navbar and Hero styling/behaviour retained.
- About now keeps the sphere visible, placed toward the upper-right so it does not sit over the main text.
- Expertise shows a smaller sphere on the right, with a more violet plasma tint.
- Projects moves the sphere continuously from right to left based on how far the section has scrolled.
- Experience moves it continuously from left to right, holds it on the right near the end, then fades it out.
- Contact and Footer keep the sphere fully hidden; it no longer reappears in Footer.
- The sphere uses shader alpha and fades its particles, outer shell, and point light together rather than shrinking to a dot.
- Sphere path is updated on scroll/resize and eased per rendered frame, while preserving one persistent WebGL canvas.

### Files changed
- `src/App.jsx` — section IDs passed to the sphere controller; navbar observer remains in place.
- `src/components/Sphere/SphereCanvas.jsx` — scroll-driven section path and continuous section progress.
- `src/components/Sphere/PlasmaSphere.jsx` — eased position, size, and true opacity fade for all sphere effects.
- `src/components/Sphere/PlasmaShader.js` — opacity and violet accent uniforms.
- `src/components/Projects/Projects.css` — modest extra top runway for the right-to-left travel.

### Verification status
- Source changes applied. Production build and browser visual verification still need to be run in the target environment.


## Sphere behaviour notes
- Section progress is calculated by the viewport centre crossing each section, so path endpoints line up with the section being viewed.
- The Projects animation starts at the right and reaches the left over the section scroll.
- The Experience animation starts at the left, reaches the right, holds, and fades before Contact.
- Do not restore a Footer re-entry unless the user asks for it; the current request explicitly keeps the sphere hidden in both Contact and Footer.
