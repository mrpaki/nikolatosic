import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content', 'vesti')

export interface VestMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  cover: string
}

export interface Vest extends VestMeta {
  content: string
}

export function getAllVesti(): VestMeta[] {
  const files = fs.readdirSync(contentDir)
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(contentDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        cover: (data.cover as string) ?? '',
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export async function getVest(slug: string): Promise<Vest> {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.md`), 'utf-8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkHtml).process(content)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    cover: (data.cover as string) ?? '',
    content: processed.toString(),
  }
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const meseci = ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AVG', 'SEP', 'OKT', 'NOV', 'DEC']
  return `${d.getDate()}. ${meseci[d.getMonth()]} ${d.getFullYear()}.`
}
