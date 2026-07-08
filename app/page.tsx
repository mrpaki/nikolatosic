import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllVesti, formatDate } from '@/lib/vesti'
import { sezona2026 } from '@/data/sezona'

export const metadata: Metadata = {
  title: 'Nikola Tošić · #11 · Clio Cup Series 2026',
  description:
    'Zvanični sajt trkača Nikole Tošića #11 u Renault Clio Cup Series 2026. Sedam vikenda, jedan cilj.',
}

export default function HomePage() {
  const latestVesti = getAllVesti().slice(0, 3)
  const nextRaces = sezona2026
    .filter((r) => r.status === 'sledeca' || r.status === 'predstoji')
    .slice(0, 3)

  return (
    <>
      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-num" aria-hidden="true">
          11
        </div>
        <div className="wrap">
          <div>
            <span className="eyebrow">Clio Cup Series 2026 · AKSK Crvena zvezda</span>
            <h1>
              Brzina se
              <br />
              ne pregovara.
              <br />
              <span className="thin">Podijum da.</span>
            </h1>
            <p className="lead">
              Nikola Tošić — trkač Renault Clio Cup Series. Sedam vikenda širom Evrope, jedan cilj:
              gore na listi rezultata.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" href="#kontakt">
                Postani partner
              </Link>
              <Link className="btn btn-ghost" href="/sezona">
                Prati sezonu →
              </Link>
            </div>
          </div>
          <div className="hero-media" aria-label="Fotografija vozača i automobila">
            <span className="ph-tag">Foto: vozač + auto u pokretu</span>
          </div>
        </div>
      </header>

      {/* STAT STRIP */}
      <div className="strip">
        <div className="wrap">
          <div className="stat">
            <div className="n">
              P<span className="u">3</span>
            </div>
            <div className="l">Najbolji plasman</div>
          </div>
          <div className="stat">
            <div className="n">2</div>
            <div className="l">Podijuma</div>
          </div>
          <div className="stat">
            <div className="n">7</div>
            <div className="l">Vikenda u sezoni</div>
          </div>
          <div className="stat">
            <div className="n">
              1:34<span className="u">.8</span>
            </div>
            <div className="l">Najbrži krug</div>
          </div>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="about" id="o-vozacu">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Vozač</span>
            <h2>Iza volana</h2>
          </div>
          <div className="grid reveal">
            <div className="about-media" aria-label="Portret vozača">
              <span className="ph-tag">Portret / paddock foto</span>
            </div>
            <div>
              <p>
                Sa kartinga na profesionalne staze —{' '}
                <strong>Nikola Tošić (11)</strong> vozi Clio Cup za AKSK Crvena zvezda i bori se
                među stalnim kandidatima za podijum u Series diviziji.
              </p>
              <p>
                Clio Cup je poznat kao najbliža borba točak-uz-točak u jednomarkovnom šampionatu —
                bez skupih nadogradnji, sve se svodi na vozača. Tu Nikola pravi razliku.
              </p>
              <div className="quote">
                „Isti auto za sve. Razlika je u onome što uradiš u zadnjih deset metara pred
                krivinu."
              </div>
              <Link className="more-link" href="/vozac">
                Pročitaj više o vozaču →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEASON TEASER */}
      <section className="season" id="sezona-preview">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Sezona 2026</span>
            <h2>Predstoji</h2>
          </div>
          <div className="teaser-grid reveal">
            {nextRaces.map((r) => (
              <div key={r.runda} className="teaser-card">
                <div className="race-round">
                  RUNDA {String(r.runda).padStart(2, '0')} · {r.zemlja.toUpperCase()}
                </div>
                <div className="race-name">{r.staza}</div>
                <div className="race-date">{r.datum}</div>
              </div>
            ))}
          </div>
          <Link
            className="more-link"
            href="/sezona"
            style={{ marginTop: '28px', display: 'inline-flex' }}
          >
            Kompletan raspored i rezultati →
          </Link>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section id="galerija-preview">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Galerija</span>
            <h2>Sa staze</h2>
          </div>
          <div className="thumb-grid reveal">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="thumb" aria-hidden="true" />
            ))}
          </div>
          <Link className="more-link" href="/galerija">
            Pogledaj sve fotografije →
          </Link>
        </div>
      </section>

      {/* LATEST VESTI */}
      <section className="season" id="vesti">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Novosti</span>
            <h2>Poslednje vesti</h2>
          </div>
          <div className="news-grid reveal">
            {latestVesti.map((v) => (
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
          <Link className="more-link" href="/vesti">
            Sve vesti →
          </Link>
        </div>
      </section>

      {/* PARTNERS / TELEMETRY OF REACH */}
      <section className="partners" id="partneri">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Za partnere</span>
            <h2>Doseg u brojkama</h2>
          </div>
          <div className="grid reveal">
            <div className="reach">
              <div className="rh">
                <span>Telemetrija dosega · sezona 2025</span>
                <span className="live">Live</span>
              </div>
              <div className="reach-row">
                <span className="k">Gledanost prenosa (YouTube + TV)</span>
                <span className="v">
                  2.4<span className="u">M</span>
                </span>
              </div>
              <div className="reach-row">
                <span className="k">Pratioci na Instagramu</span>
                <span className="v">
                  31<span className="u">K</span>
                </span>
              </div>
              <div className="reach-row">
                <span className="k">Domašaj objava mesečno</span>
                <span className="v">
                  480<span className="u">K</span>
                </span>
              </div>
              <div className="reach-row">
                <span className="k">Trka u sezoni (izlaganje branda)</span>
                <span className="v">14</span>
              </div>
              <div className="reach-row">
                <span className="k">Zemalja na kalendaru</span>
                <span className="v">05</span>
              </div>
            </div>

            <div className="offer">
              <h3>Šta partner dobija</h3>
              <p>
                Auto, kombinezon i digitalni kanali su vaš medijski prostor — svaki vikend, pred
                publikom koja voli motosport.
              </p>
              <div className="tiers">
                <div className="tier">
                  <div>
                    <div className="t-name">Naslovni partner</div>
                    <div className="t-desc">Hauba + poklopac motora, sve objave, media kit</div>
                  </div>
                  <div className="t-price">na upit</div>
                </div>
                <div className="tier">
                  <div>
                    <div className="t-name">Bočni partner</div>
                    <div className="t-desc">Bočne strane / krov, mesečni izveštaj dosega</div>
                  </div>
                  <div className="t-price">od 3.500€</div>
                </div>
                <div className="tier">
                  <div>
                    <div className="t-name">Sezonski partner</div>
                    <div className="t-desc">Kombinezon / retrovizori + social spomini</div>
                  </div>
                  <div className="t-price">od 1.200€</div>
                </div>
              </div>
              <a className="btn btn-primary" href="mailto:nikola@nikolatosic.rs">
                Preuzmi media kit (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <div className="logos">
        <div className="wrap">
          <span className="lbl">Uz podršku</span>
          <span className="logo-slot">MILLENNIUM TEAM</span>
          <span className="logo-slot">SPONZOR 02</span>
          <span className="logo-slot">SPONZOR 03</span>
          <span className="logo-slot">SPONZOR 04</span>
          <span className="logo-slot">SPONZOR 05</span>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact" id="kontakt">
        <div className="wrap">
          <h2>
            Vozimo
            <br />
            zajedno?
          </h2>
          <p>
            Za sponzorstva, media kit i saradnju — javite se. Odgovor stiže brže od pit-stopa.
          </p>
          <a className="btn-dark" href="mailto:nikola@nikolatosic.rs">
            nikola@nikolatosic.rs →
          </a>
        </div>
      </section>
    </>
  )
}
