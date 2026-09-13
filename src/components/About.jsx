/**
 * About.jsx — Brand story section
 * Tells the Jachyhoo story with an image, copy, and value-pillar cards.
 */

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          {/* ── Left: image ── */}
          <div className="about__image-wrap">
            <img
              className="about__image"
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&auto=format&fit=crop&q=80"
              alt="Jachyhoo brand — crafted for street culture"
              loading="lazy"
            />
            {/* Decorative offset box */}
            <div className="about__accent-box" aria-hidden="true" />
          </div>

          {/* ── Right: copy ── */}
          <div className="about__content">
            <span className="about__tag">Our Story</span>
            <h2 className="section-title">Born on the Block,<br />Built for the World.</h2>

            <p className="about__text">
              Jachyhoo started in a garage with a single sewing machine and one obsession —
              making the perfect hoodie. Not fast fashion. Not overpriced hype.
              Just premium materials, clean cuts, and drops that matter.
            </p>
            <p className="about__text">
              Every piece is cut and sewn from 400 GSM French-terry cotton,
              pre-washed for that broken-in feel right out of the bag.
              We collaborate with independent artists and keep production small
              so every drop stays rare, intentional, and real.
            </p>

            <a href="#shop" className="btn-primary" style={{ display: 'inline-flex', marginTop: '8px' }}>
              Explore the Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            {/* Value pillars */}
            <div className="about__pillars">
              <div className="about__pillar">
                <div className="about__pillar-icon">🧵</div>
                <div className="about__pillar-title">Premium Fabric</div>
                <p className="about__pillar-text">400 GSM organic French-terry, pre-washed &amp; shrink-free.</p>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-icon">🎨</div>
                <div className="about__pillar-title">Original Drops</div>
                <p className="about__pillar-text">Limited runs — no restocks. Designs that stay rare.</p>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-icon">🌱</div>
                <div className="about__pillar-title">Sustainable</div>
                <p className="about__pillar-text">Ethical sourcing, recycled packaging, carbon-neutral shipping.</p>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-icon">⚡</div>
                <div className="about__pillar-title">Fast Delivery</div>
                <p className="about__pillar-text">Ships in 24 h. Free returns within 30 days, no questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
