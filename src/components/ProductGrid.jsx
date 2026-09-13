/**
 * ProductGrid.jsx — Product showcase section
 * Renders a responsive grid of hoodie product cards.
 * Each card has image, name, color, price (INR), and "Add to Cart" button.
 * Cart interactions are handled via the global JachyhooCart store.
 */

const { useState } = React;

/** ── Product catalogue data (prices in INR) ── */
const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Oversized Hoodie",
    color: "Jet Black",
    price: 2999,
    originalPrice: 3999,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 2,
    name: "Arctic Fleece Pullover",
    color: "Chalk White",
    price: 2499,
    originalPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 3,
    name: "Ember Zip-Up Hoodie",
    color: "Burnt Orange",
    price: 3299,
    originalPrice: 4199,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 4,
    name: "Stone Washed Classic",
    color: "Ash Grey",
    price: 2199,
    originalPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 5,
    name: "Camo Tech Hoodie",
    color: "Urban Camo",
    price: 3599,
    originalPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 6,
    name: "Midnight Crop Hoodie",
    color: "Navy Blue",
    price: 2799,
    originalPrice: 3499,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 7,
    name: "Sand Dune Relaxed Fit",
    color: "Desert Sand",
    price: 2599,
    originalPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 8,
    name: "Logo Drop Heavyweight",
    color: "Forest Green",
    price: 3199,
    originalPrice: 3999,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=75",
  },
];

/** Format a number as Indian Rupee string e.g. ₹2,999 */
function inr(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

/** ── Individual product card ── */
function ProductCard({ product, onAdd }) {
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    onAdd(product);
    setJustAdded(true);
    /* Reset button label after 1.5 s */
    setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <article className="product-card">
      {/* Image */}
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            /* Fallback to a guaranteed placeholder if Unsplash fails */
            e.target.onerror = null;
            e.target.src = `https://placehold.co/500x500/111111/ff3c00?text=${encodeURIComponent(product.name)}`;
          }}
        />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>

      {/* Body */}
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__color">{product.color}</p>

        <div className="product-card__footer">
          {/* Price in INR */}
          <div>
            <span className="product-card__price">{inr(product.price)}</span>
            {product.originalPrice && (
              <span className="product-card__price-old">{inr(product.originalPrice)}</span>
            )}
          </div>

          {/* Add to cart */}
          <button
            className={`btn-cart${justAdded ? ' added' : ''}`}
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Added
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

/** ── Section wrapper ── */
function ProductGrid({ onAddToCart }) {
  return (
    <section className="products" id="shop">
      <div className="container">
        <div className="products__header">
          <p className="section-subtitle">The Collection</p>
          <h2 className="section-title">Shop Hoodies</h2>
        </div>
        <div className="products__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
}
