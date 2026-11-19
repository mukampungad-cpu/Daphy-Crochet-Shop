
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";
import colorfulBag from "../assets/colorful-bag.png";
import greenTshirt from "../assets/green-tshirt.png";
import headband from "../assets/headband.png";

import {
  Heart,
  ShoppingBag,
  X,
  Plus,
  Minus,
  RotateCcw
} from "lucide-react";

import { useCart } from "../context/CartContext";

function formatPrice(price) {
  return `${new Intl.NumberFormat("en-RW").format(price)} RWF`;
}

function Shop() {
  const { addToCart } = useCart();

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("daphy-favorites")) || [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const dragRef = useRef(null);

  const categories = [
    {
      name: "Bags",
      description: "Handmade bags for every occasion.",
      image: colorfulBag
    },
    {
      name: "Clothing",
      description: "Beautiful handmade crochet fashion.",
      image: greenTshirt
    },
    {
      name: "Accessories",
      description: "Lovely details to complete your style.",
      image: headband
    }
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  useEffect(() => {
    localStorage.setItem("daphy-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (!selectedProduct) return;

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        closeImage();
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProduct]);

  function openImage(product) {
    setSelectedProduct(product);
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  }

  function closeImage() {
    setSelectedProduct(null);
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
    dragRef.current = null;
  }

  function changeZoom(amount) {
    setZoom((previous) => {
      const next = Math.min(3.5, Math.max(1, previous + amount));

      if (next === 1) {
        setImagePosition({ x: 0, y: 0 });
      }

      return next;
    });
  }

  function resetImage() {
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  }

  function startDragging(event) {
    if (zoom <= 1) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: imagePosition.x,
      originY: imagePosition.y
    };
  }

  function moveImage(event) {
    if (!dragRef.current) return;

    const drag = dragRef.current;

    setImagePosition({
      x: drag.originX + event.clientX - drag.startX,
      y: drag.originY + event.clientY - drag.startY
    });
  }

  function stopDragging() {
    dragRef.current = null;
  }

  function toggleFavorite(productId) {
    setFavorites((previousFavorites) => {
      if (previousFavorites.includes(productId)) {
        return previousFavorites.filter((id) => id !== productId);
      }

      return [...previousFavorites, productId];
    });
  }

  function orderProduct(product) {
    const message = `Hello Daphy Crochet Shop!

I would like to order:

Product: ${product.name}
Price: ${formatPrice(product.price)}
Quantity: 1

Please confirm my order. Thank you!`;

    const link = `https://wa.me/250784975438?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank");
  }

  return (
    <div className="home-page">
      <Navbar />

      <style>{`
        .shop-category-section {
          padding: 35px 6% 65px;
          background: #FAF7F0;
          text-align: center;
        }

        .shop-category-heading span {
          color: #96704D;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .shop-category-heading h2 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          margin: 12px 0;
        }

        .shop-category-heading p {
          color: #76685B;
          font-size: 15px;
          line-height: 1.7;
          margin: 0 auto 32px;
        }

        .shop-category-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          max-width: 1150px;
          margin: auto;
        }

        .shop-category-card {
          padding: 0;
          border: 2px solid transparent;
          border-radius: 9px;
          overflow: hidden;
          background: white;
          cursor: pointer;
          text-align: left;
          box-shadow: 0 4px 18px rgba(70, 45, 25, 0.08);
          transition: 0.3s ease;
        }

        .shop-category-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(70, 45, 25, 0.14);
        }

        .shop-category-card.active {
          border-color: #79512F;
        }

        .shop-category-card img {
          width: 100%;
          height: 260px;
          display: block;
          object-fit: cover;
        }

        .shop-category-info {
          padding: 20px;
        }

        .shop-category-info h3 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          margin: 0 0 8px;
        }

        .shop-category-info p {
          color: #76685B;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .shop-category-card.active .shop-category-info h3 {
          color: #79512F;
        }

        .view-all-products {
          margin-top: 28px;
          padding: 12px 27px;
          background: #79512F;
          color: white;
          border: 1px solid #79512F;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .view-all-products:hover {
          background: #493322;
        }

        @media (max-width: 768px) {
          .shop-category-section {
            padding: 35px 5% 50px;
          }

          .shop-category-heading h2 {
            font-size: 29px;
          }

          .shop-category-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            gap: 20px;
          }

          .shop-category-card img {
            height: 280px;
          }
        }
      `}</style>

      {/* SHOP PAGE TITLE */}
      <section
        style={{
          textAlign: "center",
          padding: "45px 20px 35px"
        }}
      >
        <p
          style={{
            color: "#79512F",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "3px",
            marginBottom: "10px"
          }}
        >
          DAPHY CROCHET SHOP
        </p>

        <h1
          style={{
            color: "#4B3020",
            fontFamily: "'Playfair Display', serif",
            fontSize: "38px",
            margin: "0"
          }}
        >
          Shop With Us
        </h1>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="shop-category-section">
        <div className="shop-category-heading">
          <span>FIND YOUR FAVOURITE</span>
          <h2>Shop by Category</h2>
          <p>
            Explore our handmade collections and discover
            something special.
          </p>
        </div>

        <div className="shop-category-grid">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className={`shop-category-card ${
                selectedCategory === category.name ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category.name);
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              <img src={category.image} alt={category.name} />

              <div className="shop-category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="view-all-products"
          onClick={() => {
            setSelectedCategory("All");
            document.getElementById("products")?.scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          View All Products
        </button>
      </section>

      {/* PRODUCT COLLECTION */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <p>MADE WITH LOVE</p>

          <h2>
            {selectedCategory === "All"
              ? "Our Crochet Collection"
              : `${selectedCategory} Collection`}
          </h2>

          <span>
            Discover beautiful handmade creations made specially for you.
          </span>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => {
            const isFavorite = favorites.includes(product.id);

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="clickable-product-image"
                    onClick={() => openImage(product)}
                    title="Click to view larger image"
                  />

                  <button
                    className={`favorite-button ${isFavorite ? "liked" : ""}`}
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={isFavorite ? "Unlike product" : "Like product"}
                    aria-pressed={isFavorite}
                  >
                    <Heart
                      size={19}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                <div className="product-info">
                  <span>{product.category}</span>
                  <h3>{product.name}</h3>

                  <p className="product-price">
                    {formatPrice(product.price)}
                  </p>

                  <button
                    className="add-to-cart-button"
                    type="button"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag size={17} />
                    Add to Cart
                  </button>

                  <button
                    className="whatsapp-order-button"
                    type="button"
                    onClick={() => orderProduct(product)}
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PRODUCT IMAGE ZOOM */}
      {selectedProduct && (
        <div className="image-lightbox" onClick={closeImage}>
          <button
            className="lightbox-close"
            type="button"
            onClick={closeImage}
            aria-label="Close large image"
          >
            <X size={28} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-image-stage">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className={`lightbox-product-image ${
                  zoom > 1 ? "is-zoomed" : ""
                }`}
                draggable="false"
                style={{
                  transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${zoom})`
                }}
                onPointerDown={startDragging}
                onPointerMove={moveImage}
                onPointerUp={stopDragging}
                onPointerCancel={stopDragging}
                onLostPointerCapture={stopDragging}
              />
            </div>

            <h2>{selectedProduct.name}</h2>
            <p>{formatPrice(selectedProduct.price)}</p>

            <div className="image-zoom-controls">
              <button
                type="button"
                onClick={() => changeZoom(-0.5)}
                disabled={zoom <= 1}
                aria-label="Zoom out"
              >
                <Minus size={21} />
              </button>

              <span>{Math.round(zoom * 100)}%</span>

              <button
                type="button"
                onClick={() => changeZoom(0.5)}
                disabled={zoom >= 3.5}
                aria-label="Zoom in"
              >
                <Plus size={21} />
              </button>

              <button
                type="button"
                onClick={resetImage}
                aria-label="Reset image"
                title="Reset image"
              >
                <RotateCcw size={19} />
              </button>
            </div>

            <small className="image-drag-instruction">
              Zoom in, then drag the picture to explore its details.
            </small>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <h2>Daphy Crochet Shop</h2>
        <p>Handmade with Love</p>
        <p>Beautiful crochet creations, made just for you.</p>
        <p>WhatsApp: +250 784 975 438</p>

        <small>
          © {new Date().getFullYear()} Daphy Crochet Shop. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default Shop;
