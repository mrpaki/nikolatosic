import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllVesti, formatDate } from '@/lib/vesti'

export const metadata: Metadata = {
  title: 'Vesti · Nikola Tošić #11 · Clio Cup Series 2026',
  description:
    'Sve vesti i izveštaji sa trka — Nikola Tošić #11 u Renault Clio Cup Series 2026.',
}

export default function VestiPage() {
  const vesti = getAllVesti()

  return (
    <>
      {/* HEADER */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">Novosti</span>
          <h1
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 900,
              fontStyle: 'italic',
              textTransform: 'uppercase',
              fontSize: 'clamp(46px, 7vw, 86px)',
              lineHeight: 0.92,
              marginTop: 20,
              marginBottom: 52,
              letterSpacing: '-0.02em',
            }}
          >
            Vesti
          </h1>
        </div>
      </section>

      {/* NEWS GRID */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="news-grid reveal">
            {vesti.map((v) => (
              <Link key={v.slug} href={`/vesti/${v.slug}`} className="news-card">
                <div className="news-card-img" aria-hidden="true" />
                <div className="news-card-body">
                  <div className="news-card-date">{formatDate(v.date)}</div>
                  <div className="news-card-title">{v.title}</div>
                  <div className="news-card-excerpt">{v.excerpt}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
