'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/vozac', label: 'Vozač' },
  { href: '/sezona', label: 'Sezona' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/vesti', label: 'Vesti' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = () => setOpen(false)

  return (
    <nav>
      <div className="wrap">
        <Link className="brand" href="/" onClick={close}>
          <span className="num">11</span>NIKOLA&nbsp;TOŠIĆ
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href || pathname.startsWith(l.href + '/') ? 'active' : ''}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/#kontakt" onClick={close}>
            Za partnere →
          </Link>
        </div>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          aria-label={open ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
