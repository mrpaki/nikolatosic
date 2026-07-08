import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllSlugs, getVest, formatDate } from '@/lib/vesti'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const vest = await getVest(params.slug)
  return {
    title: `${vest.title} · Nikola Tošić #11`,
    description: vest.excerpt,
  }
}

export default async function VestPage({ params }: { params: { slug: string } }) {
  const vest = await getVest(params.slug)

  return (
    <>
      <article>
        <div className="wrap">
          {/* HEADER */}
          <div className="vest-header">
            <Link
              href="/vesti"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--slate)',
                letterSpacing: '0.1em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← Sve vesti
            </Link>

            <span className="eyebrow" style={{ marginTop: 28, display: 'inline-flex' }}>
              Vest
            </span>

            <h1 className="vest-title">{vest.title}</h1>

            <div className="vest-meta">{formatDate(vest.date)}</div>

            {/* Cover placeholder */}
            <div className="vest-cover" aria-label="Naslovna fotografija" />
          </div>

          {/* BODY */}
          <div
            className="vest-content"
            dangerouslySetInnerHTML={{ __html: vest.content }}
          />
        </div>
      </article>
    </>
  )
}
