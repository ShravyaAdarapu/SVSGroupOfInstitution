# SVS website: project handoff (ChatGPT Work → Claude)

Prepared 28 October 2026.

## Repository

- GitHub: https://github.com/ShravyaAdarapu/SVSGroupOfInstitution (branch `main`, tracking `origin/main`)
- Local: `svs medical institution/svs-site/`
- History: 23 ChatGPT Work commits ("Update Site source") + 1 `.gitignore` commit.
- The parent folder `svs medical institution/` is a separate, empty Git repo holding scratch material
  (helper scripts, `.tar.gz` snapshots, previews, 1.3 GB source film, brochure text). It is not
  pushed and should stay private: `brochure-extracted.txt` contains a portal default PIN and a
  personal mobile number.

## Stack and build

- Website: static HTML/CSS/JS in `dist/` (30+ pages). `dist/` is the hand-maintained site, not
  disposable build output, and is tracked in Git.
- React 19 + Tailwind 4 + esbuild add-on in `src/` for two entry points:
  - `src/feature-demo.tsx` → `dist/assets/feature-demo.js` / `.css` (AI capabilities demo, `ai-capabilities.html`)
  - `src/nav-entry.tsx` → `dist/assets/slide-tabs.js` (sliding navigation highlight)
- Build: `npm install`, then `npm run build:feature`. No dev server, tests, or linter configured.
- shadcn-style components in `src/components/ui` (`@/` alias → `src/`).

## Deployment

- Only `.openai/hosting.json` exists (ChatGPT hosting: project ID + static directory). It does not
  apply outside ChatGPT. No other hosting is configured yet; `dist/` can be served as a static site
  by any static host once one is chosen.

## Design rules

See `PROJECT_REQUIREMENTS.md`. Highlights: white + single pale teal palette, video hero with short
intro and three-college gallery, no breadcrumbs or visitor-facing source references, never invent
identities, approvals, services or social handles.

## Outstanding work

- Institution-supplied verification still needed: current approval letters, sanctioned UG/PG
  intake, full faculty directory, fees, stipend disclosures, Dental and Nursing course details.
- Official WhatsApp / Instagram / Facebook destinations for the floating social buttons.
- Verify current NMC, university and Dental/Nursing council disclosure requirements before launch.
- Smart Portal and AI component remain previews; keep honest functional/privacy notices.
- Choose a hosting provider and set up deployment.
- Optional cleanup: ten `.emf` portrait files in `dist/assets/` are not referenced by any page.
- Optional: add a README.
