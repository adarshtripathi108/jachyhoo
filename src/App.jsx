/**
 * App.jsx — Root application component
 *
 * Wires together all section components and owns the cart toast notification.
 * The global JachyhooCart store (cart.js) is the single source of truth
 * for cart state; components interact with it directly.
 */

const { useState, useEffect, useCallback } = React;

function App() {
  /* ── Toast notification state ── */
  const [toast, setToast] = useState({ visible: false, message: '' });
  /** @type {ReturnType<typeof setTimeout>|null} */
  let toastTimer = null;

  /**
   * Show a brief toast notification then auto-dismiss.
   * @param {string} message
   */
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    setToast({ visible: true, message });
    toastTimer = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2200);
  }

  /**
   * Handle add-to-cart: delegates to global store, shows toast.
   * @param {{ id: number, name: string, price: number }} product
   */
  function handleAddToCart(product) {
    JachyhooCart.addItem(product);
    showToast(`"${product.name}" added to cart ✓`);
  }

  /* Cleanup timer on unmount */
  useEffect(() => {
    return () => {
      if (toastTimer) clearTimeout(toastTimer);
    };
  }, []);

  return (
    <>
      {/* ── Fixed navigation ── */}
      <Navbar />

      {/* ── Page sections ── */}
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
        <About />
      </main>

      {/* ── Site footer ── */}
      <Footer />

      {/* ── Cart toast notification ── */}
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

/* ── Mount React app to the DOM ── */
const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(<App />);
