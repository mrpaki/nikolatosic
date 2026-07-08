import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija · Nikola Tošić #11 · Clio Cup Series 2026',
  description: 'Foto galerija — Nikola Tošić #11 na stazama Renault Clio Cup Series 2026.',
}

const cells: Array<{ label: string; size?: 'big' | 'wide' }> = [
  { label: 'Naslovna akcija', size: 'big' },
  { label: 'Grid — start' },
  { label: 'Boks — pit stop' },
  { label: 'Preticanje u krivini', size: 'wide' },
  { label: 'Podijum — Nogaro' },
  { label: 'Detalj auta' },
  { label: 'Paddock' },
  { label: 'Kvalifikacije', size: 'wide' },
  { label: 'Portret — kombinezon', size: 'big' },
  { label: 'Safety car' },
  { label: 'Magny-Cours — izlaz iz šikane' },
  { label: 'Tire wall — Nogaro' },
]

export default function GalerijaPage() {
  return (
    <>
      {/* HEADER */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">Foto arhiva</span>
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
            Sa staze
          </h1>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="gallery-grid reveal">
            {cells.map((c) => (
              <div
                key={c.label}
                className={`gcell${c.size ? ` ${c.size}` : ''}`}
                aria-label={c.label}
              >
                <span className="ph-tag">{c.label}</span>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: 32,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--slate-dim)',
              letterSpacing: '0.1em',
            }}
          >
            Fotografije: zameni sadržajem iz{' '}
            <code style={{ color: 'var(--accent)' }}>public/galerija/</code>
          </p>
        </div>
      </section>
    </>
  )
}
