# Snapshot
- 2026-08-21T10:55:39-03:00 [USER] Goal: select the best authentic photos from the supplied Drive folder and add real movement to the homepage hero without changing Hostinger production.
- 2026-08-21T11:01:56-03:00 [TOOL] Current state: commit `e1eca0b` is published on `staging`; GitHub Pages and private Sites version 10 contain the selected authentic media while Hostinger production remains unchanged.
- 2026-08-21T10:55:39-03:00 [CODE] The hero uses a muted, looping, inline 12-second MP4 (1.55 MB) with a 51 KB WebP poster; reduced-motion users receive only the static poster.
- 2026-08-21T10:55:39-03:00 [CODE] Instrument, brand, and workshop sections now use optimized WebP assets from the company's Drive folder.
- 2026-08-21T10:55:39-03:00 [TOOL] Vinext build, lint, three rendered tests, ten WCAG color checks, and GitHub Pages static export pass.
- 2026-08-21T11:01:56-03:00 [CODE] Next action: collect user approval on the two test URLs; do not merge to `main` without approval.
- 2026-08-21T10:55:39-03:00 [CODE] Open questions: none.

# Decisions
- 2026-08-10T12:06:00-03:00 [CODE] D001 ACTIVE: use Meta's public `instagram_oembed` endpoint and official `embed.js` so no token is exposed on GitHub Pages.
- 2026-08-10T12:06:00-03:00 [CODE] D002 ACTIVE: keep verified Reel URLs in `app/data/site.ts`; automatic latest-post synchronization requires a professional account and server-held credentials.
- 2026-08-21T10:12:58-03:00 [USER] D003 SUPERSEDED: replace the orange/lime role tokens with the company's black, beige, and warm wood palette.
- 2026-08-10T12:13:28-03:00 [USER] D004 ACTIVE: remove the mission block, place Instagram there, hide post captions, and publish directly to GitHub `main`.
- 2026-08-10T22:27:44-03:00 [CODE] D005 ACTIVE: build the Hostinger package from `origin/main` without changing the behind local checkout; remove the GitHub repository subpath so assets resolve from the hosted domain root.
- 2026-08-10T22:45:56-03:00 [CODE] D006 ACTIVE: prefer GitHub-connected Hostinger deployment over editing generated files in `public_html`; use Node.js 22, `npm run build:pages`, output directory `out`, empty base path, and the final site URL.
- 2026-08-10T23:12:00-03:00 [CODE] D007 ACTIVE: use the generated `hostinger` branch as the Hostinger Git deployment source; never edit or merge source code into that branch manually.
- 2026-08-13T12:35:00-03:00 [CODE] D008 ACTIVE: keep the Instagram section at three Reels; prepend a newly requested Reel and remove the oldest displayed item.
- 2026-08-21T10:55:39-03:00 [USER] D009 ACTIVE: use `DSCN1054.MOV` as the authentic hero motion and keep all media changes isolated to `staging` until approval.

# Done (recent)
- 2026-08-10T23:10:00-03:00 [TOOL] GitHub build and branch publication completed successfully.
- 2026-08-10T23:12:00-03:00 [TOOL] Reconnected Hostinger from `main` to `hostinger` and deployed the generated static branch.
- 2026-08-10T23:12:00-03:00 [TOOL] Verified production HTML and four live URLs with HTTP 200.
- 2026-08-13T12:35:00-03:00 [MILESTONE] Published Reel `Db8Mi9tTQ6v` to production through commit `165542b`, workflow `31715961298`, and generated Hostinger commit `0fe5b98`.
- 2026-08-21T10:22:00-03:00 [MILESTONE] Completed and published the black/beige visual system, social preview, isolated staging branch, and two test URLs without changing Hostinger production.
- 2026-08-21T10:55:39-03:00 [CODE] Selected and optimized authentic company media, implemented the motion hero and three real-photo sections, and completed local validation.
- 2026-08-21T11:01:56-03:00 [MILESTONE] Published authentic-media staging commit `e1eca0b`, GitHub Actions run `32489548833`, and private Sites version 10; production remained unchanged.

# Working set
- 2026-08-21T10:55:39-03:00 [CODE] `app/components/Hero.tsx`
- 2026-08-21T10:55:39-03:00 [CODE] `app/components/Categories.tsx`
- 2026-08-21T10:55:39-03:00 [CODE] `app/components/About.tsx`
- 2026-08-21T10:55:39-03:00 [CODE] `app/components/Luthieria.tsx`
- 2026-08-21T10:55:39-03:00 [CODE] `app/styles/hero.css`
- 2026-08-21T10:55:39-03:00 [CODE] `app/styles/sections.css`
- 2026-08-21T10:55:39-03:00 [CODE] `app/styles/about.css`
- 2026-08-21T10:55:39-03:00 [CODE] `public/media/`
- 2026-08-21T10:55:39-03:00 [CODE] `tests/rendered-html.test.mjs`
- 2026-08-21T10:55:39-03:00 [CODE] `README.md`

# Incidents
- 2026-08-10T12:06:00-03:00 [TOOL] Symptoms: none active; Evidence: all project validations pass; Mitigation: none required; Status: CLOSED.
- 2026-08-10T22:54:36-03:00 [TOOL] Symptoms: Hostinger preview shows `403 Forbidden`; Evidence: deployment log contains clone, Composer, and publish only, while the repository root has no `index.html` and requires `npm run build:pages`; Mitigation: publish the built static output or use Hostinger Node.js Web App deployment; Status: OPEN pending user choice.
- 2026-08-10T23:12:00-03:00 [TOOL] SUPERSEDES the open 403 incident: Symptoms resolved; Evidence: Hostinger deployed `hostinger` commit `2a4afee` and all production checks return HTTP 200; Mitigation: generated branch plus automatic workflow; Status: CLOSED.
- 2026-08-21T10:22:00-03:00 [TOOL] Symptoms: initial staging Pages deploy was rejected; Evidence: GitHub environment allowed only `main`; Mitigation: added the `staging` branch policy without removing `main` and reran only failed jobs; Status: CLOSED.

# Receipts
- 2026-08-10T23:07:00-03:00 [TOOL] `npm.cmd test` passed 3 tests, all color checks passed, and `npm.cmd run lint` exited 0.
- 2026-08-10T23:08:00-03:00 [TOOL] Dry-run and actual push of `b9ab26b` to `origin/main` succeeded.
- 2026-08-10T23:09:00-03:00 [TOOL] First Hostinger workflow run `31451444465` failed only because `git rm` ran on an empty orphan branch; production was unaffected.
- 2026-08-10T23:09:00-03:00 [TOOL] Fix `dce32f1` passed tests and lint; dry-run and actual push succeeded.
- 2026-08-10T23:10:00-03:00 [TOOL] Workflow run `31451517222` completed successfully and published branch `hostinger` at `2a4afee`.
- 2026-08-10T23:11:00-03:00 [TOOL] Remote branch contains `index.html`, favicon, social card, Google verification file, `.nojekyll`, official-domain metadata, and no GitHub repository subpath.
- 2026-08-10T23:12:00-03:00 [TOOL] Hostinger hPanel confirms repository branch `hostinger`, root `public_html`, and completed deployment.
- 2026-08-10T23:12:00-03:00 [TOOL] `https://ritmoemelodia.com/`, favicon, Google verification file, and social card each returned HTTP 200.
- 2026-08-13T12:31:00-03:00 [TOOL] `npm.cmd test` passed 3 tests, all color checks passed, and `npm.cmd run lint` exited 0; Docker was unavailable, so no host packages were installed.
- 2026-08-13T12:32:00-03:00 [TOOL] Static export succeeded with `GITHUB_PAGES=true`, empty base path, and the official site URL; `out/index.html` contains `Db8Mi9tTQ6v` and omits `DaQqBRaTKP1`.
- 2026-08-13T12:35:00-03:00 [TOOL] Live desktop and 390 px mobile checks loaded the new Instagram iframe first and measured `scrollWidth == clientWidth`.
- 2026-08-21T10:12:58-03:00 [TOOL] New palette minimum verified contrast is 6.99:1 for tertiary text on surface; action beige on background is 11.50:1.
- 2026-08-21T10:12:58-03:00 [TOOL] Hostinger official documentation confirms built-in staging is WordPress-specific; static sites can use an independent subdomain or branch-based preview.
- 2026-08-21T10:22:00-03:00 [TOOL] GitHub Actions run `32486139842` succeeded after the branch-policy correction and deployed the `staging` commit.
- 2026-08-21T10:22:00-03:00 [TOOL] GitHub Pages staging returns HTTP 200 with theme `#0e0c0a`, `og.png`, and favicon; production returns HTTP 200 with its prior `#0b0b0b` theme and prior social card.
- 2026-08-21T10:22:00-03:00 [TOOL] Private Sites version 9 deployment `appgdep_6a885088ed3c8191b39d97c112795475` succeeded at the existing Sites URL.
- 2026-08-21T10:25:00-03:00 [CODE] Official GitHub actions were updated to Node 24-compatible majors (`checkout@v7`, `setup-node@v7`, `upload-pages-artifact@v5`, `deploy-pages@v5`) after the staging run emitted a Node 20 deprecation warning.
- 2026-08-21T10:55:39-03:00 [TOOL] Reviewed 100 JPGs and 3 MOVs from the user-provided Drive folder; selected `DSCN1054.MOV`, `DSCN1055.JPG`, `DSCN1037.JPG`, `DSCN1025.JPG`, and `DSCN1098.JPG`.
- 2026-08-21T10:55:39-03:00 [TOOL] Final media totals 1.93 MB; Vinext build, lint, all tests, color checks, and GitHub Pages export passed with correct repository base paths.
- 2026-08-21T11:01:56-03:00 [TOOL] GitHub Pages and its MP4 returned HTTP 200 with the new authentic assets; production returned HTTP 200 and did not contain `hero-guitarra.mp4`.
