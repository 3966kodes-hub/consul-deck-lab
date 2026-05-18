/**
 * コンサルデッキ ラボ — Site Configuration
 */

export const SITE = {
  name: 'コンサルデッキ ラボ',
  nameEn: 'Consul Deck Lab',
  tagline: 'コンサル現場で 10 年使える、資料作成のすべて。',
  taglineEn: 'Executive Decks. Crafted by Real Consultants.',
  description: '現役コンサルが PPT・Excel・Word の資料作成術を網羅。提案書・ステコミ・ピッチデッキの作り方から Excel 事業計画モデル、AI 活用まで。',
  url: 'https://consul-deck-lab.com',
  author: 'とっても！ハッピーマン',
  authorBio: '現役コンサル（具体企業名は伏せる）。提案書・ステコミ・経営会議資料を年間 100 本以上作成。Kindle『39歳、年収800万円アップの転職術』著者。',
  ogImage: '/images/ogp-default.png',
  locale: 'ja-JP',
  startYear: 2026,
} as const;

export type CategorySlug =
  | 'ppt-structure'
  | 'ppt-diagram'
  | 'ppt-chart'
  | 'ppt-design'
  | 'ppt-efficiency'
  | 'ppt-scenes'
  | 'excel-modeling'
  | 'word-templates'
  | 'ai-doc'
  | 'tools-addins'
  | 'career';

export interface Category {
  slug: CategorySlug;
  label: string;
  shortLabel: string;
  number: string;
  description: string;
  accentColor: 'navy' | 'gold' | 'sage' | 'steel' | 'amber' | 'slate';
  expectedCount: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'ppt-structure',
    label: 'PPT 構成・ロジック設計',
    shortLabel: 'PPT 構成',
    number: '01',
    description: 'ピラミッド原則・SCQA・MECE・FAB・PREP など、コンサル現場で実際に使われる資料構成のフレームワークを完全解説。',
    accentColor: 'navy',
    expectedCount: 50,
  },
  {
    slug: 'ppt-diagram',
    label: 'PPT 図解パターン',
    shortLabel: 'PPT 図解',
    number: '02',
    description: 'プロセス図・マトリクス・ピラミッド・サイクル・ベン図など、コンサルが多用する図解 60 種を解説。',
    accentColor: 'navy',
    expectedCount: 60,
  },
  {
    slug: 'ppt-chart',
    label: 'PPT チャート・グラフ技法',
    shortLabel: 'PPT チャート',
    number: '03',
    description: '棒グラフ・折れ線・Waterfall・Mekko・100% 積み上げなど、データ可視化の正攻法を徹底解説。',
    accentColor: 'navy',
    expectedCount: 40,
  },
  {
    slug: 'ppt-design',
    label: 'PPT 配色・タイポ・レイアウト',
    shortLabel: 'PPT デザイン',
    number: '04',
    description: '配色 3 色ルール・フォント選び・余白設計・グリッドシステムなど、ビジネス資料の見た目を整える原則。',
    accentColor: 'navy',
    expectedCount: 30,
  },
  {
    slug: 'ppt-efficiency',
    label: 'PPT 機能・ショートカット・効率化',
    shortLabel: 'PPT 効率化',
    number: '05',
    description: 'ショートカット 30 選・QAT カスタマイズ・スライドマスター・テンプレ化で作業時間を 3 倍速くする。',
    accentColor: 'navy',
    expectedCount: 30,
  },
  {
    slug: 'ppt-scenes',
    label: 'シーン別 PPT',
    shortLabel: 'シーン別',
    number: '06',
    description: '提案書・ステコミ・ピッチデッキ・経営会議・キックオフなど、用途別の構成テンプレを完全解説。',
    accentColor: 'gold',
    expectedCount: 60,
  },
  {
    slug: 'excel-modeling',
    label: 'Excel データ分析・モデリング',
    shortLabel: 'Excel',
    number: '07',
    description: '事業計画モデル・KPI ダッシュボード・財務 3 表連動・Power Query など、コンサル目線の Excel 実務術。',
    accentColor: 'sage',
    expectedCount: 70,
  },
  {
    slug: 'word-templates',
    label: 'Word 提案書・契約書・議事録',
    shortLabel: 'Word',
    number: '08',
    description: '提案書テンプレ・議事録・契約書ドラフト・差し込み印刷など、Word でビジネス文書を効率化。',
    accentColor: 'steel',
    expectedCount: 30,
  },
  {
    slug: 'ai-doc',
    label: 'AI × 資料作成',
    shortLabel: 'AI 活用',
    number: '09',
    description: 'Microsoft Copilot・ChatGPT を使った PPT・Excel・Word の高速化術。プロンプト集と実例で解説。',
    accentColor: 'amber',
    expectedCount: 30,
  },
  {
    slug: 'tools-addins',
    label: 'ツール・アドイン',
    shortLabel: 'ツール',
    number: '10',
    description: 'think-cell・empower・Mekko Graphics など、コンサル現場で使われる PPT アドインを徹底解説。',
    accentColor: 'slate',
    expectedCount: 20,
  },
  {
    slug: 'career',
    label: 'キャリア・転職・スキルアップ',
    shortLabel: 'キャリア',
    number: '11',
    description: 'コンサル転職対策・資料作成スキルの磨き方・ファーム別の文化など、キャリアを動かす情報。',
    accentColor: 'gold',
    expectedCount: 20,
  },
];

export const PILLAR_POSTS = [
  {
    slug: 'pillar-001-ppt-structure-5-patterns',
    number: '01',
    title: 'コンサル現場で本当に使われる PPT 構成 5 パターン完全ガイド',
    description: 'ピラミッド・SCQA・FAB・MECE・3 段論法。現場で実際に使われる 5 大構成を、適用シーンと実例で完全解説。',
    category: 'ppt-structure' as CategorySlug,
  },
  {
    slug: 'pillar-002-ppt-diagram-30',
    number: '02',
    title: '【完全保存版】PPT 図解パターン 30 選',
    description: 'プロセス・マトリクス・ピラミッド・サイクル・ベン図。コンサル現場で頻出する 30 の図解を目的別に整理。',
    category: 'ppt-diagram' as CategorySlug,
  },
  {
    slug: 'pillar-003-consul-proposal',
    number: '03',
    title: 'コンサルの提案書はこう作る｜表紙からエグゼクティブサマリーまで完全テンプレート化',
    description: '12 スライド単位の構成を分解。役員クラスが 30 秒で意思決定できる「コンサル品質提案書」のテンプレ。',
    category: 'ppt-scenes' as CategorySlug,
  },
  {
    slug: 'pillar-004-excel-business-plan',
    number: '04',
    title: 'Excel で事業計画モデルを作る完全ガイド',
    description: '3 期分の P/L・CF を 1 シートで仕上げる手順。前提条件→売上→コスト→利益→CF をセル単位で解説。',
    category: 'excel-modeling' as CategorySlug,
  },
  {
    slug: 'pillar-005-ppt-shortcuts-30',
    number: '05',
    title: 'コンサルが使う PPT ショートカット 30 選｜作業速度を 3 倍にする神技集',
    description: '整列・配置・書式・編集の 4 カテゴリで厳選した 30 のショートカット。導入による速度向上の実例付き。',
    category: 'ppt-efficiency' as CategorySlug,
  },
] as const;

export const NAV_ITEMS = [
  { href: '/category/ppt-structure/', label: 'PPT 構成' },
  { href: '/category/ppt-diagram/', label: '図解' },
  { href: '/category/ppt-chart/', label: 'チャート' },
  { href: '/category/ppt-design/', label: 'デザイン' },
  { href: '/category/ppt-efficiency/', label: '効率化' },
  { href: '/category/ppt-scenes/', label: 'シーン別' },
  { href: '/category/excel-modeling/', label: 'Excel' },
  { href: '/category/word-templates/', label: 'Word' },
  { href: '/category/ai-doc/', label: 'AI' },
] as const;

export const FOOTER_LINKS = [
  {
    title: 'カテゴリ',
    items: [
      { href: '/category/ppt-structure/', label: 'PPT 構成・ロジック' },
      { href: '/category/ppt-diagram/', label: 'PPT 図解' },
      { href: '/category/ppt-chart/', label: 'PPT チャート' },
      { href: '/category/excel-modeling/', label: 'Excel モデリング' },
      { href: '/category/word-templates/', label: 'Word テンプレ' },
    ],
  },
  {
    title: 'サイト情報',
    items: [
      { href: '/about/', label: 'サイトについて' },
      { href: '/disclosure/', label: 'PR 表記' },
      { href: '/privacy/', label: 'プライバシーポリシー' },
      { href: '/contact/', label: 'お問い合わせ' },
    ],
  },
] as const;
