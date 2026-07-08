import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vozač · Nikola Tošić #11 · Clio Cup Series 2026',
  description:
    'Biografija i karijera Nikole Tošića — trkača #11 u Renault Clio Cup Series za AKSK Crvena zvezda.',
}

export default function VozacPage() {
  return (
    <>
      {/* INTRO */}
      <section className="vozac-intro">
        <div className="wrap">
          <span className="eyebrow">Profil vozača</span>
          <h1>
            Nikola
            <br />
            Tošić
          </h1>
        </div>
      </section>

      {/* BIO */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="bio-grid reveal">
            <div className="bio-portrait" aria-label="Portret vozača">
              <span className="ph-tag">Portret / paddock foto</span>
            </div>

            <div className="bio-text">
              <span className="eyebrow" style={{ marginBottom: 20 }}>
                Iza volana
              </span>

              <p>
                <strong>Nikola Tošić (#11)</strong> vozi u Renault Clio Cup Series za ekipu{' '}
                <strong>AKSK Crvena zvezda</strong> — najstariji i najugledniji auto-klup u Srbiji.
                Put na profesionalne staze počeo je u karting halama, gde je Nikola izgradio
                tehničku osnovu i reflekse koji danas dolaze do izražaja na najbrže stazama Evrope.
              </p>

              <p>
                Clio Cup je šampionat poznat po jednoj jednostavnoj premisi: svi vozači imaju
                identičan auto. Nema skupih razvoja, nema tehničkih prednosti — samo vozač, gume i
                260 konjskih snaga. U takvom okruženju, svaka desetinka je vozačeva, ne inženjerova.
              </p>

              <p>
                Sezona 2026. za Nikolu je donela dva podijuma u prve tri runde — treće mesto u
                Nogarou i još jedno P3 u Magny-Coursu, gde je postavio i{' '}
                <strong>najbrži krug cele sezone</strong>. Sa preostalim četiri rundama, šampionat
                je potpuno otvoren.
              </p>

              <blockquote className="bio-quote">
                „Isti auto za sve. Razlika je u onome što uradiš u zadnjih deset metara pred
                krivinu."
              </blockquote>

              <p>
                Van staze, Nikola aktivno gradi zajednicu navijača i sarađuje sa partnerima koji
                veruju u ovaj projekat. Svaki vikend je nova priča — sedmoro od njih u 2026.
              </p>

              <div className="career-steps">
                <div className="career-step">
                  <span className="cs-year">2019–21</span>
                  <span className="cs-name">Karting · regionalne serije</span>
                </div>
                <div className="career-step">
                  <span className="cs-year">2022</span>
                  <span className="cs-name">Clio Cup — debi sezona</span>
                </div>
                <div className="career-step">
                  <span className="cs-year">2023</span>
                  <span className="cs-name">Clio Cup · prvi podijum (P2, Pau)</span>
                </div>
                <div className="career-step">
                  <span className="cs-year">2024</span>
                  <span className="cs-name">Clio Cup · 3× podijum</span>
                </div>
                <div className="career-step">
                  <span className="cs-year">2025</span>
                  <span className="cs-name">Clio Cup · 5× podijum</span>
                  <span className="cs-badge">AKSK CZ</span>
                </div>
                <div className="career-step">
                  <span className="cs-year">2026</span>
                  <span className="cs-name">Clio Cup Series · U toku</span>
                  <span className="cs-badge">AKTIVAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section className="season">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Ekipa</span>
            <h2>AKSK Crvena zvezda</h2>
          </div>
          <div className="reveal">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
                alignItems: 'center',
              }}
            >
              <div>
                <p className="about" style={{ padding: 0 }}>
                  <span style={{ color: 'var(--slate)', fontSize: 17, lineHeight: 1.7, display: 'block' }}>
                    <strong style={{ color: 'var(--chalk)' }}>Auto-Klub Sportski Klub Crvena zvezda</strong>{' '}
                    je jedan od najstarijih auto-moto klubova u Srbiji, sa bogatom tradicijom u
                    motosportu na svim nivoima — od kartinga do međunarodnih šampionata.
                  </span>
                </p>
                <p style={{ color: 'var(--slate)', fontSize: 17, lineHeight: 1.7, marginTop: 18 }}>
                  Klub pruža kompletan logistički i tehnički podršku Nikoli tokom svake runde — od
                  transporta do podešavanja auta između slobodnih i kvalifikacijskih sesija.
                </p>
              </div>
              <div
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  background: 'var(--panel)',
                  padding: '32px 28px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--slate)',
                    marginBottom: 20,
                  }}
                >
                  Tim · Sezona 2026
                </div>
                {[
                  { uloga: 'Vozač', ime: 'Nikola Tošić #11' },
                  { uloga: 'Tim menadžer', ime: 'AKSK Crvena zvezda' },
                  { uloga: 'Šef mehanike', ime: '—' },
                  { uloga: 'Inženjer podataka', ime: '—' },
                ].map((m) => (
                  <div
                    key={m.uloga}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--line)',
                    }}
                  >
                    <span style={{ color: 'var(--slate)', fontSize: 14 }}>{m.uloga}</span>
                    <span style={{ fontWeight: 600, fontSize: 14 }}>{m.ime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact" id="kontakt">
        <div className="wrap">
          <h2>
            Pitanja?
            <br />
            Pišite nam.
          </h2>
          <p>Za medijske upite, intervjue i saradnju — tu smo.</p>
          <a className="btn-dark" href="mailto:nikola@nikolatosic.rs">
            nikola@nikolatosic.rs →
          </a>
        </div>
      </section>
    </>
  )
}
