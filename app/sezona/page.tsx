import type { Metadata } from 'next'
import { sezona2026 } from '@/data/sezona'

export const metadata: Metadata = {
  title: 'Sezona 2026 · Nikola Tošić #11 · Clio Cup Series',
  description:
    'Kompletan raspored i rezultati sezone 2026 — Renault Clio Cup Series, Nikola Tošić #11.',
}

const badgeClass: Record<string, string> = {
  podijum: 'badge podium',
  bodovi: 'badge points',
  sledeca: 'badge up',
  predstoji: 'badge points',
}

const badgeLabel: Record<string, string> = {
  podijum: 'Podijum',
  bodovi: 'Bodovi',
  sledeca: 'Sledeća',
  predstoji: 'Predstoji',
}

const posClass = (poz: string | null): string => {
  if (!poz) return 'pos next'
  if (poz === 'P1') return 'pos p1'
  if (poz === 'P2') return 'pos p2'
  if (poz === 'P3') return 'pos p3'
  return 'pos'
}

export default function SezonaPage() {
  const odradene = sezona2026.filter((r) => r.pozicija !== null)
  const podijumi = odradene.filter((r) => r.status === 'podijum').length
  const najbrziKrug = sezona2026.find((r) => r.lapColor === 'pb')?.najbrziKrug ?? '—'

  return (
    <>
      {/* HEADER */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">Kalendar &amp; rezultati</span>
          <h1
            style={{
              fontFamily: 'var(--font-archivo)',
              fontWeight: 900,
              fontStyle: 'italic',
              textTransform: 'uppercase',
              fontSize: 'clamp(46px, 7vw, 86px)',
              lineHeight: 0.92,
              marginTop: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Sezona 2026
          </h1>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="strip" style={{ marginTop: 40 }}>
        <div className="wrap">
          <div className="stat">
            <div className="n">{odradene.length}</div>
            <div className="l">Odraðenih rundi</div>
          </div>
          <div className="stat">
            <div className="n">{podijumi}</div>
            <div className="l">Podijuma</div>
          </div>
          <div className="stat">
            <div className="n">P3</div>
            <div className="l">Najbolji plasman</div>
          </div>
          <div className="stat">
            <div className="n" style={{ fontSize: 28 }}>
              {najbrziKrug}
            </div>
            <div className="l">Lični rekord sezone</div>
          </div>
        </div>
      </div>

      {/* TIMING TOWER */}
      <section className="season">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Renault Clio Cup Series 2026</span>
            <h2>Timing Tower</h2>
          </div>

          <div className="tower reveal">
            <div className="tower-head">
              <span>Poz</span>
              <span>Staza</span>
              <span>Datum</span>
              <span>Status</span>
              <span>Najbrži krug</span>
            </div>

            {sezona2026.map((r) => (
              <div key={r.runda} className="row">
                <span className={posClass(r.pozicija)}>{r.pozicija ?? '—'}</span>

                <span className="track">
                  {r.staza}
                  {r.finale && ' ★'}
                  <small>
                    {r.zemlja} · Runda {String(r.runda).padStart(2, '0')}
                    {r.finale ? ' · Finale' : ''}
                  </small>
                </span>

                <span className="date">{r.datum}</span>

                <span className={badgeClass[r.status]}>{badgeLabel[r.status]}</span>

                <span
                  className={`lap${r.lapColor ? ` ${r.lapColor}` : ''}`}
                  style={!r.najbrziKrug ? { color: 'var(--slate-dim)' } : undefined}
                >
                  {r.najbrziKrug ?? '—'}
                </span>
              </div>
            ))}
          </div>

          <div className="tower-legend">
            <span>
              <i style={{ background: 'var(--accent)' }} />
              Najbrži krug sezone
            </span>
            <span>
              <i style={{ background: 'var(--green)' }} />
              Lični rekord staze
            </span>
            <span>
              <i style={{ background: 'var(--amber)' }} />
              Sledeća trka
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact" id="kontakt">
        <div className="wrap">
          <h2>
            Dođi na
            <br />
            sledeću trku.
          </h2>
          <p>Za akreditacije, partnere i medije — jedna poruka je dovoljna.</p>
          <a className="btn-dark" href="mailto:nikola@nikolatosic.rs">
            nikola@nikolatosic.rs →
          </a>
        </div>
      </section>
    </>
  )
}
