# Vineet & Alka · Wedding Invitation

A static site: `index.html`, `styles.css`, `script.js` and `assets/img/`.
(`assets/raw/` holds the original images and is not needed online.)

## Edit details
Everything editable is at the top of `script.js` (the `WEDDING` object):
hashtag, WhatsApp number, music file, the couple note, venues and events.

## Preview locally
    python3 -m http.server 8765
then open http://localhost:8765

## Deploy (GitHub Pages)
1. Create a new public repository on github.com, e.g. `wedding`.
2. Upload `index.html`, `styles.css`, `script.js` and the `assets/img` folder.
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After a minute the site is live at `https://<username>.github.io/wedding/`.
5. Update `og:image` in `index.html` to the full URL of `assets/img/us-2.jpg`
   so WhatsApp shows a photo in the link preview.

## Deploy (Netlify, quickest)
Drag this folder (without `assets/raw`) onto https://app.netlify.com/drop
