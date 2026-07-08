#!/usr/bin/env bash
set -e

REPO="https://github.com/mrpaki/nikolatosic.git"
TMP="/tmp/nikolatosic-deploy"

echo "▶ Build..."
NEXT_PUBLIC_BASE_PATH=/nikolatosic npm run build

echo "▶ Priprema deploy foldera..."
rm -rf "$TMP"
cp -r out/ "$TMP"
touch "$TMP/.nojekyll"

echo "▶ Push na gh-pages..."
cd "$TMP"
git init -q
git checkout -b gh-pages
git add .
git commit -q -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$REPO"
git push -f origin gh-pages

echo ""
echo "✓ Live: https://mrpaki.github.io/nikolatosic/"
