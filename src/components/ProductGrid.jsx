/**
 * ProductGrid.jsx — Product showcase section
 * Renders a responsive grid of hoodie product cards.
 * Each card has image, name, color, price, and "Add to Cart" button.
 * Cart interactions are handled via the global JachyhooCart store.
 */

const { useState } = React;

/** ── Product catalogue data ── */
const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Oversized Hoodie",
    color: "Jet Black",
    price: 89,
    originalPrice: 110,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 2,
    name: "Arctic Fleece Pullover",
    color: "Chalk White",
    price: 79,
    originalPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 3,
    name: "Ember Zip-Up Hoodie",
    color: "Burnt Orange",
    price: 95,
    originalPrice: 120,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1614495870500-cd2ca1fce55c?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 4,
    name: "Stone Washed Classic",
    color: "Ash Grey",
    price: 74,
    originalPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 5,
    name: "Camo Tech Hoodie",
    color: "Urban Camo",
    price: 99,
    originalPrice: null,
    badge: "New",
    image: "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 6,
    name: "Midnight Crop Hoodie",
    color: "Navy Blue",
    price: 82,
    originalPrice: 98,
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1572495641004-28421ae3bf92?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 7,
    name: "Sand Dune Relaxed Fit",
    color: "Desert Sand",
    price: 77,
    originalPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1596609548086-85bbf8dcea31?w=500&auto=format&fit=crop&q=75",
  },
  {
    id: 8,
    name: "Logo Drop Heavyweight",
    color: "Forest Green",
    price: 92,
    originalPrice: 105,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&auto=format&fit=crop&q=75",
  },
];

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
          {/* Price */}
          <div>
            <span className="product-card__price">${product.price}</span>
            {product.originalPrice && (
              <span className="product-card__price-old">${product.originalPrice}</span>
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
