# コンサルデッキ ラボ（consul-deck-lab.com）

> **「コンサル現場で 10 年使える、資料作成のすべて。」**

現役コンサルが PPT・Excel・Word の資料作成術を網羅。コンサル現場品質の構成・図解・チャート・効率化テクニックを 360 本超で展開。

## 技術スタック

- **Framework**: Astro 6.x
- **Styling**: Tailwind CSS v4
- **Content**: MDX
- **Search**: Pagefind
- **Icons**: Lucide via Astro Icon
- **Hosting**: Cloudflare Pages
- **Deployment**: Wrangler CLI

## 開発コマンド

```bash
npm install         # 依存関係インストール
npm run dev         # 開発サーバ（http://localhost:4321）
npm run build       # ビルド + Pagefind インデックス生成
npm run preview     # ビルド結果のプレビュー
```

## デプロイ

```powershell
# config/cloudflare_token.txt に API トークンを保存（.gitignore 済み）
.\deploy.ps1
```

## ブランドアイデンティティ

「Executive Stoic」コンセプト：エグゼクティブ向けの知的さ × 装飾を排した実務向きストイックさ

- Primary: Onyx Black `#0F1419` / Off White `#FAFAF7`
- Accent: Consultant Gold `#C9A55C` / Deep Navy `#1E3A5F`
- 見出し: Playfair Display + Noto Serif JP（セリフ）
- 本文: Noto Sans JP（ゴシック）

詳細は [サイトデザイン構成書](https://github.com/3966kodes-hub/consul-deck-lab) 参照。

## ライセンス

(c) 2026 とっても！ハッピーマン. All rights reserved.
