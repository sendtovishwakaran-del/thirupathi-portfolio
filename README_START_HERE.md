# Thirupathi Reddy — Dragon UI/UX Portfolio

This is a **complete replacement portfolio website**, not just the Sprout dragon demo.

## Upload to GitHub Pages
1. Create a new **Public** repository (for example `thirupathi-portfolio`).
2. Upload the **contents of this folder** to the repository root, keeping `assets/` as a folder. The root must include `index.html`, `careconnect.html`, `styles.css`, `main.js`, `dragon.js`, `CNAME`, and `assets/`.
3. Repository Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save.
4. First test at `https://YOUR-USERNAME.github.io/thirupathi-portfolio/` (or with the custom domain if `CNAME` redirects).
5. In the old repository Settings → Pages, remove `thirupathireddy.com` as a custom domain. GitHub user Settings → Pages can verify domain ownership with a DNS TXT record. In the **new** repository, Settings → Pages → Custom domain → `thirupathireddy.com` → Save.
6. Keep the four GitHub Pages A records at Porkbun for the root domain: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Use a `www` CNAME to YOUR-USERNAME.github.io if desired.
7. After you can access `https://thirupathireddy.com/` and `https://thirupathireddy.com/careconnect.html`, enable Enforce HTTPS when available.
8. Delete the old repository only **after** the new one is connected; Settings → General → Danger Zone → Delete this repository. Deletion is destructive and requested by the user.

## Edit before sharing publicly
- `index.html`: add your preferred real public contact email, LinkedIn and/or GitHub profile URL in the contact section. No fake contact links are included.
- `index.html`: refine the About section to reflect your actual experience.
- `careconnect.html`: research plans are accurately marked as provisional. Add only genuine usability findings after tests.
- `assets/careconnect-cover.svg`: original CareConnect screenshot/design showcase.

## Technology and behavior
- HTML + CSS + JavaScript + Three.js ES module CDN `https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js`.
- The procedurally modeled dragon has head tracking, pupil movement, blinking, idle sway, and accessibility motion settings.
- Requires internet access for CDN and Google Fonts; website should be served over HTTP(S), not opened with `file://`.
- For local preview, run `python -m http.server 8000` from the folder and open `http://localhost:8000`.
