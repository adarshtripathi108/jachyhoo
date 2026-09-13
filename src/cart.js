/**
 * cart.js — Jachyhoo Cart State & Logic
 *
 * Manages a global cart state as a plain JS object so it can be shared
 * across all React components without a bundler/context provider.
 * Components subscribe via a simple event emitter pattern.
 */

const JachyhooCart = (() => {
  /** @type {{ id: number, name: string, price: number, qty: number }[]} */
  let items = [];

  /** @type {Function[]} Listener callbacks for state changes */
  const listeners = [];

  /**
   * Notify all subscribers that cart state changed.
   */
  function _emit() {
    const snapshot = getSnapshot();
    listeners.forEach((fn) => fn(snapshot));
  }

  /**
   * Subscribe to cart changes.
   * @param {Function} fn - Called with the latest snapshot on every change.
   * @returns {Function} Unsubscribe function.
   */
  function subscribe(fn) {
    listeners.push(fn);
    return () => {
      const idx = listeners.indexOf(fn);
      if (idx !== -1) listeners.splice(idx, 1);
    };
  }

  /**
   * Returns a shallow copy of current cart state.
   * @returns {{ items: object[], totalCount: number, totalPrice: number }}
   */
  function getSnapshot() {
    const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return { items: [...items], totalCount, totalPrice };
  }

  /**
   * Add a product to the cart (increments qty if already present).
   * @param {{ id: number, name: string, price: number }} product
   */
  function addItem(product) {
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }
    _emit();
  }

  /**
   * Remove one unit of a product from the cart.
   * @param {number} id
   */
  function removeItem(id) {
    items = items.filter((i) => i.id !== id);
    _emit();
  }

  /**
   * Clear the entire cart.
   */
  function clearCart() {
    items = [];
    _emit();
  }

  return { subscribe, getSnapshot, addItem, removeItem, clearCart };
})();
