# 画像置き場

このフォルダは、ホームページ用画像を置く場所です。

## ファイル名ルール

- 半角英数字・小文字・ハイフン区切りにする
- 日本語ファイル名、空白、大文字混在は避ける
- GitHub Pagesでは大文字小文字の違いでリンク切れになる場合があるため、小文字で統一する

## 推奨形式

- `webp` または `jpg` を基本にする
- 必要に応じて `png` も使う
- トップ用画像、記事用画像は横長を基本にする
- 画像は重くしすぎない

## ファイル名の例

- トップ画像: `home-hero.png`
- 記事画像: `post-homepage-first-version.webp`
- 記事画像: `post-codex-supervision-workflow.webp`

## 使う時の注意

- 実画像を追加する時は、altテキストも必ず考える
- `index.html` や `articles.html` から読む場合は `assets/images/...`
- `posts/` 配下の記事ページから読む場合は `../assets/images/...`
