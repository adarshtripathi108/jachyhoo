/**
 * App.jsx — Root application component
 *
 * Wires together all section components.
 * Owns the cart drawer (slide-in panel) and the add-to-cart toast.
 * The global JachyhooCart store (cart.js) is the single source of truth.
 */

const { useState, useEffect, useRef } = React;

/* ── Helper: format INR ── */
function inrApp(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

/* ── Cart Drawer Component ── */
function CartDrawer({ open, onClose }) {
  const [cartState, setCartState] = useState(JachyhooCart.getSnapshot());

  useEffect(() => {
    const unsub = JachyhooCart.subscribe((snap) => setCartState(snap));
    return unsub;
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside className={`cart-drawer${open ? ' open' : ''}`} aria-label="Shopping cart">
        {/* Header */}
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            Your Cart
            {cartState.totalCount > 0 && (
              <span className="cart-drawer__count">{cartState.totalCount}</span>
            )}
          </h2>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="cart-drawer__body">
          {cartState.items.length === 0 ? (
            <div className="cart-drawer__empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" style={{color:'var(--border)', marginBottom:'16px'}}>
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>Your cart is empty.</p>
              <a href="#shop" className="btn-primary" onClick={onClose} style={{marginTop:'16px', display:'inline-flex'}}>
                Shop Now
              </a>
            </div>
          ) : (
            <ul className="cart-drawer__items">
              {cartState.items.map((item) => (
                <li key={item.id} className="cart-drawer__item">
                  <div className="cart-drawer__item-info">
                    <span className="cart-drawer__item-name">{item.name}</span>
                    <span className="cart-drawer__item-qty">Qty: {item.qty}</span>
                  </div>
                  <div className="cart-drawer__item-right">
                    <span className="cart-drawer__item-price">{inrApp(item.price * item.qty)}</span>
                    <button
                      className="cart-drawer__remove"
                      onClick={() => JachyhooCart.removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with total & checkout */}
        {cartState.items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>Total</span>
              <span>{inrApp(cartState.totalPrice)}</span>
            </div>
            <button
              className="btn-primary"
              style={{width:'100%', justifyContent:'center', padding:'16px'}}
              onClick={() => alert('Checkout coming soon! 🛒')}
            >
              Proceed to Checkout
            </button>
            <button
              className="btn-outline"
              style={{width:'100%', justifyContent:'center', marginTop:'10px'}}
              onClick={() => { if(window.confirm('Clear cart?')) JachyhooCart.clearCart(); }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

/* ── Root App ── */
function App() {
  /* Cart drawer open/close */
  const [cartOpen, setCartOpen] = useState(false);

  /* Toast notification */
  const [toast, setToast] = useState({ visible: false, message: '' });
  const toastTimer = useRef(null);

  function showToast(message) {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, message });
    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2200);
  }

  function handleAddToCart(product) {
    JachyhooCart.addItem(product);
    showToast(`"${product.name}" added to cart ✓`);
  }

  useEffect(() => {
    return () => { if (toastTimer.current) clearTimeout(toastTimer.current); };
  }, []);

  return (
    <>
      {/* Fixed navigation */}
      <Navbar onCartOpen={() => setCartOpen(true)} />

      {/* Page sections */}
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
        <About />
      </main>

      {/* Site footer */}
      <Footer />

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Add-to-cart toast */}
      <div
        role="status"
        aria-live="polite"
        className={`cart-toast${toast.visible ? '' : ' hidden'}`}
      >
        {toast.message}
      </div>
    </>
  );
}

/* Mount React app */
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
