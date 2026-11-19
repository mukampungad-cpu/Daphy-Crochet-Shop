
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src={logo}
          alt="Daphy Crochet Shop logo"
          className="navbar-logo"
        />

        <div className="logo-text">
          <strong>Daphy Crochet Shop</strong>
          <span>Handmade with Love</span>
        </div>
      </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/customer-information" onClick={closeMenu}>
          Customer Information
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="cart-link" onClick={closeMenu}>
          <ShoppingBag size={21} />
          <span>Cart ({cartCount})</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
