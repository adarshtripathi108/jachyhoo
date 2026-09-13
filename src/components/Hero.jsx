/**
 * Hero.jsx — Full-viewport hero banner
 * Features a bold headline, tagline, CTA buttons,
 * a featured hoodie image, and brand stat pills.
 */

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Radial glow background accent */}
      <div className="hero__bg" aria-hidden="true" />

      <div className="container">
        <div className="hero__inner">
          {/* ── Left: copy ── */}
          <div className="hero__copy">
            <span className="hero__tag">New Drop — FW 2025</span>

            <h1 className="hero__title">
              Wear the<br />
              <em>Streets.</em><br />
              Own the<br />
              Cold.
            </h1>

            <p className="hero__description">
              Premium heavyweight hoodies engineered for the culture.
              Built from 400 GSM French-terry cotton — brutally soft,
              built to last.
            </p>

            <div className="hero__actions">
              <a href="#shop" className="btn-primary">
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#about" className="btn-outline">Our Story</a>
            </div>

            {/* Brand stats */}
            <div className="hero__stats">
              <div>
                <div className="hero__stat-value">12K+</div>
                <div className="hero__stat-label">Happy Customers</div>
              </div>
              <div>
                <div className="hero__stat-value">48+</div>
                <div className="hero__stat-label">Unique Drops</div>
              </div>
              <div>
                <div className="hero__stat-value">100%</div>
                <div className="hero__stat-label">Organic Cotton</div>
              </div>
            </div>
          </div>

          {/* ── Right: hero image ── */}
          <div className="hero__image-wrap">
            <div className="hero__image-bg" aria-hidden="true" />
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop&q=80"
              alt="Jachyhoo signature heavyweight hoodie"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
