# Sternateq maintenance page

A full-screen, non-scrolling maintenance page using Sternateqâ€™s existing logo, navy (#060d28), blue (#2447f9), and Anton wordmark. The only contact link is info@sternateq.com. No installation or build is required.

## Local preview

Run `npm run dev` and open http://localhost:4173. Use `npm run check` for JavaScript syntax checks.

## Vercel

Import this folder as a separate project with Framework Preset **Other**, no build command, and Output Directory **.**. Alternatively, run `npx vercel` for a preview, then `npx vercel --prod` for production. Link to the intended maintenance project; do not replace the source of the full website.

Assign the company domain to this project in Vercelâ€™s Domains settings. If the domain is already assigned to the full website, move it to the maintenance project while development continues. Once the full website is ready, move the domain back.

The Vercel configuration serves this page for existing website routes. Missing asset requests return 404. Temporary noindex headers prevent the maintenance copy being indexed; these belong only to this temporary project.

The contact button opens the visitorâ€™s email app. There is no signup form or backend. The footer year updates automatically, and reduced-motion preferences are respected.


Design reference: Vitrail (https://www.framer.com/marketplace/templates/vitrail/). Oversized typography and a warm background frame the intact dimensional Sternateq logo. There are no scattered pieces or assembly controls. The company email is the only contact link.
