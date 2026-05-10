import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum([
      'ppt-structure',
      'ppt-diagram',
      'ppt-chart',
      'ppt-design',
      'ppt-efficiency',
      'ppt-scenes',
      'excel-modeling',
      'word-templates',
      'ai-doc',
      'tools-addins',
      'career',
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    isPillar: z.boolean().default(false),
    pillarNumber: z.string().optional(),
    draft: z.boolean().default(false),
    /** コンサル品質レベル（読者層の絞り込み）*/
    audience: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    /** 関連スライドサンプルのスクショ（任意）*/
    slideExamples: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
