
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomerInformation from "./pages/CustomerInformation";
import Navbar from "./components/Navbar";
import { CartProvider, useCart } from "./context/CartContext";
import "./App.css";

function formatPrice(price) {
  return `${new Intl.NumberFormat("en-RW").format(price)} RWF`;
}

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    province: "",
    district: "",
    sector: "",
    address: "",
    instructions: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function sendOrder(event) {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add products first.");
      return;
    }

    const orderDetails = cartItems
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `Hello Daphy Crochet Shop!

I would like to request an order.

CUSTOMER DETAILS
Name: ${customer.fullName}
WhatsApp phone: ${customer.phone}

DELIVERY ADDRESS
Province: ${customer.province}
District: ${customer.district}
Sector: ${customer.sector}
Detailed address: ${customer.address}

Additional instructions: ${customer.instructions || "None"}

ORDER DETAILS
${orderDetails}

Product total: ${formatPrice(cartTotal)}

Please confirm product availability, delivery charges and the final amount before I make payment.

Thank you!`;

    const link = `https://wa.me/250784975438?text=${encodeURIComponent(
      message
    )}`;

    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="cart-heading">
          <p className="page-label">YOUR SELECTION</p>
          <h1>My Shopping Cart</h1>
          <p>{cartCount} item(s) in your cart</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>
              Discover something beautiful from our crochet collection.
            </p>
            <Link to="/shop" className="shop-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)} each</p>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-end">
                    <strong>
                      {formatPrice(item.price * item.quantity)}
                    </strong>

                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                className="clear-cart-button cart-clear-all"
                type="button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>

            <section className="cart-checkout-panel">
              <div className="checkout-panel-heading">
                <p className="checkout-eyebrow">ALMOST THERE</p>
                <h2>Delivery Information</h2>
                <p>
                  Please provide your contact details and delivery address.
                </p>
              </div>

              <form className="cart-checkout-form" onSubmit={sendOrder}>
                <div className="checkout-field">
                  <label htmlFor="fullName">Full name *</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={customer.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">WhatsApp phone number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Example: 078..."
                    value={customer.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="province">Province *</label>
                  <select
                    id="province"
                    name="province"
                    value={customer.province}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose your province</option>
                    <option value="Kigali City">Kigali City</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="Northern Province">Northern Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Western Province">Western Province</option>
                  </select>
                </div>

                <div className="checkout-field">
                  <label htmlFor="district">District *</label>
                  <input
                    id="district"
                    type="text"
                    name="district"
                    placeholder="Enter your district"
                    value={customer.district}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="sector">Sector *</label>
                  <input
                    id="sector"
                    type="text"
                    name="sector"
                    placeholder="Enter your sector"
                    value={customer.sector}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="address">Detailed delivery address *</label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Cell, village, street or nearby landmark"
                    value={customer.address}
                    onChange={handleChange}
                    required
                    rows="3"
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="instructions">
                    Additional instructions (optional)
                  </label>
                  <textarea
                    id="instructions"
                    name="instructions"
                    placeholder="Any other information for your delivery?"
                    value={customer.instructions}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                <div className="checkout-order-total">
                  <span>Number of items</span>
                  <strong>{cartCount}</strong>
                </div>

                <div className="checkout-order-total checkout-final-total">
                  <span>Product total</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <p className="delivery-confirmation-note">
                  Delivery charges and the final amount will be confirmed by
                  Daphy before you make payment.
                </p>

                <button className="checkout-button" type="submit">
                  Send Order on WhatsApp
                </button>

                <p className="checkout-small-note">
                  Your order is a request. It is not confirmed until Daphy
                  contacts you.
                </p>
              </form>
            </section>
          </div>
        )}
      </main>
    </>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/customer-information"
        element={<CustomerInformation />}
      />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
