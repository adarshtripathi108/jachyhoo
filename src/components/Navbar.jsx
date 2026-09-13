/**
 * Navbar.jsx — Top navigation bar
 * Displays the Jachyhoo logo, nav links, cart button with live count,
 * and a hamburger menu for mobile.
 */

const { useState, useEffect } = React;

function Navbar() {
  /* Live cart count synced to the global cart store */
  const [cartCount, setCartCount] = useState(0);
  /* Mobile menu open/close toggle */
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    /* Subscribe to cart changes and update local count */
    const unsub = JachyhooCart.subscribe(({ totalCount }) => {
      setCartCount(totalCount);
    });
    return unsub; /* cleanup on unmount */
  }, []);

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar__inner">
          {/* Brand logo */}
          <a href="#home" className="navbar__logo">
            Jachy<span>hoo</span>
          </a>

          {/* Desktop nav links */}
          <ul className="navbar__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Desktop cart button */}
          <button className="navbar__cart" aria-label={`Cart, ${cartCount} items`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Cart
            {cartCount > 0 && (
              <span className="navbar__cart-count">{cartCount}</span>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="navbar__hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#home"  onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#shop"  onClick={() => setMenuOpen(false)}>Shop</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button style={{ color: 'var(--muted)', textAlign: 'left', letterSpacing: '0.1em', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', padding: '16px 24px', borderBottom: '1px solid var(--border)' }}>
          Cart {cartCount > 0 && `(${cartCount})`}
        </button>
      </div>
    </header>
  );
}
