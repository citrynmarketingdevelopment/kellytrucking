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

`npm run build` creates a portable static website in `out/`. `npm start` previews that export at <http://localhost:4174>. Rebuild after source changes. Deploy `out/` to a static host with directory index support. This repository does not automatically publish or change DNS.

## Included design

- `design/Kellys untitled.pen`: the original desktop and phone layouts for Home, Services, and Contact.
- `design/Kellys brand assets/`: the linked original logos and photos. Keep this folder beside the Pen file so relative image paths continue to work.
- `design/*-export.html`: original visual reference exports from Pen; these are design references, not the responsive production pages.
- `src/`: the working Next.js site.
- `public/`: production logos, photos, and locally hosted fonts with license files.

## Contact requests

The contact form validates the visitor’s name, email, and service, prepares a request for review, then offers an **Open Email App** link addressed to `dispatch@kellytrucking.net`, as specified in the original design. Nothing is automatically sent or stored. The visitor must send the request from their email app. Phone links call `(661) 361-7640`.

Before public launch, confirm the dispatch email, phone, address, service claims, and final domain with Kelly Trucking. A form delivery backend can be added later. Canonical URLs and a domain-specific sitemap are intentionally omitted until the final website domain is confirmed.

## Verification

Lint, TypeScript checks, and a production static build pass. Browser QA checks all three routes at 1440, 768, 390, and 320 pixels for horizontal overflow, missing images, and runtime errors. Contact form QA verifies validation and that the email draft preserves special characters. Navigation, phone links, and email destinations are also checked.
