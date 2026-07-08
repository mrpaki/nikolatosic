#!/usr/bin/env bash
set -e

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "▶ Build..."
cd "$REPO_ROOT"
NEXT_PUBLIC_BASE_PATH=/nikolatosic npm run build

echo "▶ Kopiranje u docs/..."
rm -rf docs
cp -r out/ docs
touch docs/.nojekyll

echo "▶ Commit i push na main..."
git add docs/
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo ""
echo "✓ Live: https://mrpaki.github.io/nikolatosic/"
