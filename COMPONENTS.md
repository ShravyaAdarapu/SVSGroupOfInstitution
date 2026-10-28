The existing website is static HTML in dist. The supplied React feature is an isolated entry point, so the other pages retain their current layout and behavior.

Reusable React components live in src/components/ui, with the @/components/ui alias configured in tsconfig.json and components.json. This shared directory keeps shadcn imports consistent. Component styles are in src/index.css (Tailwind 4); the original website styles remain in dist/*.css.

Install dependencies with npm install, then run npm run build:feature to compile the component into dist/assets. Open ai-capabilities.html to view it. The supplied component is a visual demo; its buttons do not call an AI backend.
