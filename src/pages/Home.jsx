
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";
import greenTshirt from "../assets/green-tshirt.png";
import headband from "../assets/headband.png";
import colorfulBag from "../assets/colorful-bag.png";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, MessageCircle, CheckCircle, Package } from "lucide-react";

function Home() {
  const [heroSlide, setHeroSlide] = useState(0);

  const heroProducts = Array.from(
    { length: Math.min(4, products.length) },
    (_, index) => products[(heroSlide + index) % products.length]
  );

  useEffect(() => {
    if (products.length <= 4) return;

    const timer = setInterval(() => {
      setHeroSlide((previous) => (previous + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    {
      name: "Crochet Bags",
      category: "Bags",
      description: "Beautiful handmade bags for every occasion.",
      image: colorfulBag
    },
    {
      name: "Crochet Clothing",
      category: "Clothing",
      description: "Unique handmade fashion with a personal touch.",
      image: greenTshirt
    },
    {
      name: "Crochet Accessories",
      category: "Accessories",
      description: "Lovely handmade accessories to complete your style.",
      image: headband
    }
  ];

  const orderSteps = [
    {
      number: "01",
      title: "Explore Our Collection",
      description:
        "Browse our handmade crochet bags, clothing and accessories. Discover the pieces you love.",
      icon: <ShoppingBag size={27} />
    },
    {
      number: "02",
      title: "Choose Your Products",
      description:
        "Select your favourite items, choose the quantity and add them to your shopping cart.",
      icon: <Package size={27} />
    },
    {
      number: "03",
      title: "Send Your Order",
      description:
        "Proceed with your order through WhatsApp. Your selected products and order details will be shared with Daphy.",
      icon: <MessageCircle size={27} />
    },
    {
      number: "04",
      title: "Wait for Confirmation",
      description:
        "Daphy will confirm product availability, delivery charges and payment details with you.",
      icon: <CheckCircle size={27} />
    }
  ];

  return (
    <div className="home-page">
      <Navbar />

      <style>{`
        /* HERO SECTION */
        .daphy-hero {
          background: #FAF7F0;
          padding: 65px 7%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 35px;
          min-height: 570px;
          overflow: hidden;
        }

        .daphy-hero-content {
          max-width: 540px;
        }

        .daphy-hero-label {
          color: #96704D;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 18px;
          display: block;
        }

        .daphy-hero-content h1 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .daphy-hero-content h2 {
          color: #79512F;
          font-family: 'Playfair Display', serif;
          font-size: 23px;
          font-weight: 500;
          line-height: 1.5;
          margin: 0 0 16px;
        }

        .daphy-hero-content p {
          color: #76685B;
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .daphy-hero-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #79512F;
          color: white;
          text-decoration: none;
          padding: 15px 27px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .daphy-hero-button:hover {
          background: #493322;
          transform: translateY(-3px);
        }

        /* CIRCULAR PRODUCT SLIDESHOW */
        .daphy-hero-circle {
          width: 100%;
          max-width: 540px;
          aspect-ratio: 1 / 1;
          position: relative;
          margin: 0 auto;
          overflow: hidden;
        }

        .daphy-circle-product {
          position: absolute;
          width: 42%;
          height: 42%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 1s ease-in-out;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .daphy-circle-product img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border: none;
          background: transparent;
          filter: drop-shadow(0 8px 10px rgba(70, 45, 25, 0.10));
          transition: transform 0.5s ease;
        }

        .daphy-circle-product:hover img {
          transform: scale(1.07);
        }

        .daphy-circle-top {
          top: 0;
          left: 29%;
        }

        .daphy-circle-right {
          top: 29%;
          right: 0;
        }

        .daphy-circle-bottom {
          bottom: 0;
          left: 29%;
        }

        .daphy-circle-left {
          top: 29%;
          left: 0;
        }

        .daphy-circle-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #79512F;
          font-family: 'Playfair Display', serif;
          font-size: clamp(14px, 2vw, 21px);
          font-weight: 600;
          text-align: center;
          width: 32%;
          pointer-events: none;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .daphy-hero {
            grid-template-columns: 1fr;
            padding: 50px 6%;
            gap: 25px;
            text-align: center;
          }

          .daphy-hero-content {
            margin: 0 auto;
          }

          .daphy-hero-content h1 {
            font-size: 40px;
          }

          .daphy-hero-content h2 {
            font-size: 20px;
          }

          .daphy-hero-content p {
            font-size: 14px;
          }

          .daphy-hero-circle {
            max-width: 390px;
          }

          .daphy-circle-center {
            font-size: 14px;
          }
        }

        /* DECORATIVE DIVIDER */
        .daphy-section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          background: #FAF7F0;
          padding: 8px 12%;
        }

        .daphy-divider-line {
          height: 1px;
          flex: 1;
          max-width: 260px;
          background: linear-gradient(
            to right,
            transparent,
            #B69A7D,
            #79512F,
            #B69A7D,
            transparent
          );
        }

        .daphy-divider-flower {
          color: #96704D;
          font-size: 25px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .daphy-section-divider {
            gap: 12px;
            padding: 8px 8%;
          }

          .daphy-divider-flower {
            font-size: 21px;
          }
        }

        /* SHOP CATEGORIES */
        .home-categories {
          padding: 75px 6%;
          background: #FAF7F0;
          text-align: center;
        }

        .home-categories-heading {
          margin-bottom: 38px;
        }

        .home-categories-heading span {
          color: #96704D;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .home-categories-heading h2 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          margin: 12px 0;
        }

        .home-categories-heading p {
          color: #76685B;
          font-size: 15px;
          line-height: 1.7;
          max-width: 550px;
          margin: 0 auto;
        }

        .home-category-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          max-width: 1150px;
          margin: 0 auto;
        }

        .home-category-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          text-align: left;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 18px rgba(70, 45, 25, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-category-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 25px rgba(70, 45, 25, 0.13);
        }

        .home-category-image {
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #E9DDCB;
        }

        .home-category-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .home-category-card:hover .home-category-image img {
          transform: scale(1.05);
        }

        .home-category-info {
          padding: 22px;
        }

        .home-category-info h3 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          margin: 0 0 9px;
        }

        .home-category-info p {
          color: #76685B;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 17px;
        }

        .home-category-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #79512F;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .home-categories {
            padding: 55px 5%;
          }

          .home-categories-heading h2 {
            font-size: 29px;
          }

          .home-category-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            gap: 22px;
          }

          .home-category-image {
            height: 280px;
          }
        }

        /* HOW TO ORDER */
        .how-to-order {
          background: #fff;
          padding: 80px 6%;
          text-align: center;
        }

        .how-to-order-heading {
          max-width: 650px;
          margin: 0 auto 45px;
        }

        .how-to-order-heading span {
          color: #96704D;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .how-to-order-heading h2 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          margin: 12px 0;
        }

        .how-to-order-heading p {
          color: #76685B;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        .order-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .order-step-card {
          background: #FAF7F0;
          border: 1px solid #E9DDCB;
          border-radius: 8px;
          padding: 30px 22px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .order-step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(70, 45, 25, 0.09);
        }

        .order-step-number {
          display: block;
          color: #B69A7D;
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .order-step-icon {
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          background: #79512F;
          color: #fff;
          border-radius: 50%;
        }

        .order-step-card h3 {
          color: #493322;
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          margin: 0 0 12px;
        }

        .order-step-card p {
          color: #76685B;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .order-note {
          max-width: 780px;
          margin: 35px auto 0;
          padding: 18px 22px;
          background: #F5EEE4;
          border-left: 4px solid #79512F;
          color: #634A35;
          font-size: 14px;
          line-height: 1.8;
          text-align: left;
          border-radius: 4px;
        }

        .order-shop-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
          padding: 14px 26px;
          background: #79512F;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: background 0.3s ease;
        }

        .order-shop-button:hover {
          background: #493322;
        }

        @media (max-width: 900px) {
          .order-steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .how-to-order {
            padding: 55px 5%;
          }

          .how-to-order-heading h2 {
            font-size: 29px;
          }

          .order-steps-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="daphy-hero">
        <div className="daphy-hero-content">
          <span className="daphy-hero-label">
            WELCOME TO DAPHY CROCHET SHOP
          </span>

          <h1>Wear the Beauty of Handmade</h1>

          <h2>Unique Crochet. Timeless Style.</h2>

          <p>
            Discover thoughtfully handcrafted crochet bags,
            clothing and accessories, designed to bring
            creativity, elegance and individuality to your
            everyday style. Every piece is made with care,
            passion and attention to detail.
          </p>

          <Link to="/shop" className="daphy-hero-button">
            SHOP OUR COLLECTION
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* CIRCULAR PRODUCT SLIDESHOW */}
        <div className="daphy-hero-circle">
          {heroProducts.map((product, index) => {
            const positions = [
              "daphy-circle-top",
              "daphy-circle-right",
              "daphy-circle-bottom",
              "daphy-circle-left"
            ];

            return (
              <div
                className={`daphy-circle-product ${positions[index]}`}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>
            );
          })}

          <div className="daphy-circle-center">
            Handmade with Love
          </div>
        </div>
      </section>

      {/* DECORATIVE LINE */}
      <div className="daphy-section-divider" aria-hidden="true">
        <span className="daphy-divider-line"></span>
        <span className="daphy-divider-flower">✿</span>
        <span className="daphy-divider-line"></span>
      </div>

      {/* SHOP BY CATEGORY */}
      <section className="home-categories">
        <div className="home-categories-heading">
          <span>EXPLORE OUR COLLECTION</span>

          <h2>Shop by Category</h2>

          <p>
            Discover our handmade crochet collections
            and find something special for your style.
          </p>
        </div>

        <div className="home-category-grid">
          {categories.map((category) => (
            <Link
              to={`/shop?category=${encodeURIComponent(category.category)}`}
              className="home-category-card"
              key={category.name}
            >
              <div className="home-category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <div className="home-category-info">
                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="home-category-link">
                  Explore Collection
                  <ArrowRight size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BUILT BY DAPHY */}
      <section className="build-by-daphy">
        <div className="daphy-story-container">
          <div className="daphy-story-heading">
            <h2>Built by DAPHY</h2>

            <p className="daphy-story-subtitle">
              A Vision for Handmade Fashion
            </p>
          </div>

          <div className="daphy-story-row">
            <div className="daphy-story-box">
              <p>
                Daphy Crochet Shop was founded in 2025
                with a passion for creativity and handmade
                fashion. What began as an interest in creating
                unique crochet clothing has grown into a vision
                for a professional handmade business.
              </p>

              <p>
                Today, my mission is to create beautiful,
                comfortable and distinctive crochet pieces
                that combine quality, creativity and personal
                style.
              </p>

              <p>
                My ambition is to grow Daphy Crochet Shop
                into a trusted brand, reach customers wherever
                they are and build a sustainable business
                through dedication, innovation and craftsmanship.
              </p>

              <p>
                Every piece tells a story of creativity and care.
                Thank you for being part of the Daphy Crochet
                Shop journey.
              </p>
            </div>

            <div className="daphy-story-image">
              <img
                src="/images/daphy.jpg"
                alt="Daphy, founder of Daphy Crochet Shop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="how-to-order">
        <div className="how-to-order-heading">
          <span>A SIMPLE AND PERSONAL EXPERIENCE</span>

          <h2>How to Order</h2>

          <p>
            Shopping with Daphy Crochet Shop is simple.
            Follow these four steps to order your favourite
            handmade creations.
          </p>
        </div>

        <div className="order-steps-grid">
          {orderSteps.map((step) => (
            <div className="order-step-card" key={step.number}>
              <span className="order-step-number">
                {step.number}
              </span>

              <div className="order-step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="order-note">
          <strong>Important:</strong> Sending an order does not
          automatically confirm it. Daphy will contact you to
          confirm availability, delivery charges and payment
          details before your order is finalized.
        </div>

        <Link to="/shop" className="order-shop-button">
          START SHOPPING
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* SHOP WITH US */}
      <section className="home-introduction">
        <h2>Shop With Us</h2>

        <p>
          Discover beautiful handmade crochet creations
          made with love, creativity and care. Find
          something special that matches your style.
        </p>

        <Link to="/shop" className="hero-shop-link">
          Explore Our Collection →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Daphy Crochet Shop</h2>

        <p>Handmade with Love</p>

        <p>Unique Crochet. Timeless Style. Handmade with Love.</p>

        <p>WhatsApp: +250 784 975 438</p>

        <small>
          © {new Date().getFullYear()} Daphy Crochet Shop.
          All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default Home;
