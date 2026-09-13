/**
 * Footer.jsx — Site footer
 * Brand blurb, navigation columns, social links, and legal copy.
 * The #contact anchor links here for the contact info column.
 */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* ── Main grid ── */}
        <div className="footer__grid">

          {/* Brand column */}
          <div>
            <div className="footer__brand-logo">Jachy<span>hoo</span></div>
            <p className="footer__brand-text">
              Premium streetwear hoodies engineered for the culture.
              Drop culture, real fabric, no compromises.
            </p>
            {/* Social links */}
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Instagram">IG</a>
              <a href="#" className="footer__social-link" aria-label="Twitter / X">X</a>
              <a href="#" className="footer__social-link" aria-label="TikTok">TK</a>
              <a href="#" className="footer__social-link" aria-label="YouTube">YT</a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="footer__col-title">Shop</h4>
            <ul className="footer__col-links">
              <li><a href="#shop">All Hoodies</a></li>
              <li><a href="#shop">New Arrivals</a></li>
              <li><a href="#shop">Best Sellers</a></li>
              <li><a href="#shop">Sale</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__col-links">
              <li><a href="#about">Our Story</a></li>
              <li><a href="#about">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__col-links">
              <li><a href="mailto:hello@jachyhoo.com">hello@jachyhoo.com</a></li>
              <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
              <li><a href="#">Shipping &amp; Returns</a></li>
              <li><a href="#">Size Guide</a></li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">© {year} Jachyhoo. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
