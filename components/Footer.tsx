import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Link className="brand" href="/">
          <span className="num">11</span>NIKOLA&nbsp;TOŠIĆ
        </Link>
        <div className="socials">
          <a href="#" aria-label="Instagram">INSTAGRAM</a>
          <a href="#" aria-label="YouTube">YOUTUBE</a>
          <a href="#" aria-label="Facebook">FACEBOOK</a>
        </div>
        <div className="copy">© 2026 · Clio Cup Series</div>
      </div>
    </footer>
  )
}
