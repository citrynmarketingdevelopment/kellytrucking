# Kelly Trucking

Responsive Home, Services, and Contact pages matching the original Kelly Trucking Pen design, including the original green and cream palette, Tomorrow and Alata typefaces, logos, and jobsite photography.

## Run locally

Use Node 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

## Production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

In a separate terminal after starting the server, run `npm run verify`.

`npm run build` builds the Next.js application. `npm start` runs the production server at <http://localhost:3000>. Deploy as a Next.js project or run the production server on a Node.js host. The default build no longer creates an `out/` static export. Existing trailing-slash routes are retained, and the legacy `.html` URLs permanently redirect to them. DNS remains managed separately.

## Included design

- `design/Kellys untitled.pen`: the original desktop and phone layouts for Home, Services, and Contact.
- `design/Kellys brand assets/`: the linked original logos and photos. Keep this folder beside the Pen file so relative image paths continue to work.
- `design/*-export.html`: original visual reference exports from Pen; these are design references, not the responsive production pages.
- `src/`: the working Next.js site.
- `public/`: production logos, photos, and locally hosted fonts with license files.

## Contact requests

The contact form validates the visitor’s name, email, and service, prepares a request for review, then offers an **Open Email App** link addressed to `dispatch@kellytrucking.net`, as specified in the original design. Nothing is automatically sent or stored. The visitor must send the request from their email app. Phone links call `(661) 361-7640`.

Before public launch, confirm the dispatch email, phone, address, service claims, and final domain with Kelly Trucking. A form delivery backend can be added later. The final domain is deliberately configurable. Copy `.env.example` to `.env.local` for local use, or configure `SITE_URL` on your host when the HTTPS production origin is chosen, then rebuild. This enables page-specific canonical URLs, absolute social images, organization/website/breadcrumb structured data, a three-page sitemap, and indexing. With `SITE_URL` blank, review builds remain noindex, robots disallow crawling, and the sitemap stays empty; no guessed domain is used.

## Verification

Lint, TypeScript checks, and a production Next.js build pass. `npm run verify -- http://localhost:3000` checks the running build’s server-rendered content, metadata, structured data, local assets, redirects, robots and sitemap. Browser QA checks all three routes at 1440, 768, 390, and 320 pixels for horizontal overflow, missing images, and runtime errors. Contact form QA verifies validation and that the email draft preserves special characters. Navigation, phone links, and email destinations are also checked.
