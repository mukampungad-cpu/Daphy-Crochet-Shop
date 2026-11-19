
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import bag from "../assets/colorful-bag.png";
import clothing from "../assets/green-tshirt.png";
import accessories from "../assets/headband.png";
import founder from "../assets/founder.jpg";

const products = [
  {
    name: "Crochet Bags",
    image: bag,
    description:
      "Beautiful handmade bags designed to bring creativity and style to your everyday look.",
  },
  {
    name: "Crochet Clothing",
    image: clothing,
    description:
      "Unique handmade clothing, including stylish crochet tops and sweaters, created with care.",
  },
  {
    name: "Crochet Accessories",
    image: accessories,
    description:
      "Beautiful handmade accessories, including headbands and hats, made with love and creativity.",
  },
];

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        <style>{`
          .about-page {
            background: #FAF7F0;
            color: #3B281E;
            font-family: 'DM Sans', sans-serif;
          }

          .about-container {
            width: min(1100px, 90%);
            margin: auto;
          }

          .about-label {
            color: #9A704D;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 12px;
          }

          /* HERO */

          .about-hero {
            min-height: 320px;
            padding: 75px 20px;
            background: linear-gradient(135deg, #E9DDCB, #FAF7F0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .about-hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(36px, 6vw, 58px);
            color: #503522;
            margin: 15px 0;
          }

          .about-hero p {
            font-size: 17px;
            color: #79512F;
            letter-spacing: 2px;
          }

          /* INTRODUCTION */

          .about-intro {
            text-align: center;
            padding: 75px 0 55px;
          }

          .about-intro h2,
          .about-section-title {
            font-family: 'Playfair Display', serif;
            color: #503522;
            font-size: clamp(28px, 4vw, 40px);
            margin: 15px 0;
          }

          .about-intro p {
            max-width: 760px;
            margin: 15px auto;
            line-height: 1.9;
            color: #665345;
            font-size: 16px;
          }

          /* FOUNDER */

          .about-founder {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 55px;
            align-items: center;
            padding: 45px 0 85px;
          }

          .about-founder img {
            width: 100%;
            height: 480px;
            object-fit: cover;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(80,53,34,0.12);
          }

          .about-founder h2 {
            font-family: 'Playfair Display', serif;
            color: #503522;
            font-size: 38px;
            margin: 12px 0;
          }

          .about-founder h3 {
            color: #79512F;
            font-size: 14px;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }

          .about-founder p {
            color: #665345;
            line-height: 1.9;
            font-size: 15px;
            margin-bottom: 15px;
          }

          /* WHAT WE CREATE */

          .about-products {
            padding: 80px 0;
            background: #F0E7DA;
            text-align: center;
          }

          .about-products-intro {
            max-width: 650px;
            margin: 0 auto;
            color: #665345;
            line-height: 1.9;
            font-size: 15px;
          }

          .about-product-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
            margin-top: 45px;
          }

          .about-product-card {
            background: #FAF7F0;
            border-radius: 14px;
            overflow: hidden;
            text-align: center;
            box-shadow: 0 5px 20px rgba(80,53,34,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .about-product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 28px rgba(80,53,34,0.15);
          }

          .about-product-card img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
          }

          .about-product-card h3 {
            color: #503522;
            font-family: 'Playfair Display', serif;
            font-size: 23px;
            margin: 22px 12px 12px;
          }

          .about-product-card p {
            padding: 0 22px 25px;
            color: #79512F;
            font-size: 14px;
            line-height: 1.8;
          }

          /* MISSION AND VISION */

          .about-values {
            padding: 80px 0;
            text-align: center;
          }

          .about-value-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            margin-top: 40px;
            text-align: left;
          }

          .about-value-card {
            background: #E9DDCB;
            padding: 35px;
            border-radius: 14px;
          }

          .about-value-card h3 {
            color: #503522;
            font-family: 'Playfair Display', serif;
            font-size: 26px;
          }

          .about-value-card p {
            color: #665345;
            line-height: 1.9;
            font-size: 15px;
          }

          /* ENDING */

          .about-ending {
            background: #503522;
            color: #FAF7F0;
            text-align: center;
            padding: 75px 20px;
          }

          .about-ending h2 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(28px, 4vw, 40px);
          }

          .about-ending p {
            line-height: 1.9;
            max-width: 650px;
            margin: 18px auto 30px;
          }

          .about-shop-button {
            display: inline-block;
            background: #E9DDCB;
            color: #503522;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 6px;
            font-weight: 700;
            transition: 0.3s;
          }

          .about-shop-button:hover {
            background: #FFFFFF;
            transform: translateY(-3px);
          }

          /* MOBILE */

          @media (max-width: 750px) {
            .about-founder {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .about-founder img {
              height: 380px;
            }

            .about-founder h2 {
              font-size: 32px;
            }

            .about-product-grid {
              grid-template-columns: 1fr;
              max-width: 430px;
              margin-left: auto;
              margin-right: auto;
            }

            .about-product-card img {
              height: 280px;
            }

            .about-value-grid {
              grid-template-columns: 1fr;
            }

            .about-value-card {
              padding: 25px;
            }
          }
        `}</style>

        {/* HERO SECTION */}

        <section className="about-hero">
          <span className="about-label">Daphy Crochet Shop</span>
          <h1>Our Story, Our Passion</h1>
          <p>Handmade with Love</p>
        </section>

        {/* OUR STORY */}

        <section className="about-container about-intro">
          <span className="about-label">Welcome to our world</span>

          <h2>Creativity in Every Stitch</h2>

          <p>
            Daphy Crochet Shop is a handmade crochet brand founded in
            2025. We create unique crochet pieces with care, creativity
            and attention to detail. Our goal is to bring beautiful
            handmade creations to customers who appreciate originality
            and quality.
          </p>
        </section>

        {/* FOUNDER */}

        <section className="about-container about-founder">
          <div>
            <img
              src={founder}
              alt="Founder and owner of Daphy Crochet Shop"
            />
          </div>

          <div>
            <span className="about-label">
              The person behind the brand
            </span>

            <h2>Meet Our Founder</h2>

            <h3>Founder & Owner – Daphy Crochet Shop</h3>

            <p>
              Daphy Crochet Shop was founded in 2025 by its founder,
              Daphy, with a passion for creativity, craftsmanship
              and the beauty of handmade products.
            </p>

            <p>
              What began as a journey of learning and exploring crochet
              has grown into a business with a clear purpose: to create
              unique handmade pieces while building a sustainable and
              independent future.
            </p>

            <p>
              My journey as an entrepreneur reflects determination,
              creativity and the belief that ability is not defined by
              limitations. Through Daphy Crochet Shop, I am turning my
              passion for handmade creations into a growing business
              built on independence, quality and purpose.
            </p>

            <p>
              Today, I am proud to lead Daphy Crochet Shop, bringing
              thoughtful designs and handmade creations to customers
              who appreciate quality, originality and personal care.
            </p>
          </div>
        </section>

        {/* WHAT WE CREATE */}

        <section className="about-products">
          <div className="about-container">

            <span className="about-label">Our creations</span>

            <h2 className="about-section-title">
              What We Create
            </h2>

            <p className="about-products-intro">
              Explore our beautiful handmade collections. From stylish
              crochet bags to unique clothing and lovely accessories,
              every creation is made with creativity, care and love.
            </p>

            <div className="about-product-grid">
              {products.map((product) => (
                <div
                  className="about-product-card"
                  key={product.name}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* OUR PURPOSE */}

        <section className="about-container about-values">

          <span className="about-label">What guides us</span>

          <h2 className="about-section-title">
            Our Purpose
          </h2>

          <div className="about-value-grid">

            <div className="about-value-card">
              <h3>Our Mission</h3>

              <p>
                To create beautiful, quality handmade crochet products
                that bring happiness to our customers while building
                an independent and sustainable business.
              </p>
            </div>

            <div className="about-value-card">
              <h3>Our Vision</h3>

              <p>
                To grow Daphy Crochet Shop into a recognised handmade
                brand, reaching customers locally and internationally
                while inspiring others to believe in their abilities.
              </p>
            </div>

          </div>
        </section>

        {/* THANK YOU */}

        <section className="about-ending">

          <h2>Thank You for Supporting Handmade</h2>

          <p>
            Every creation has a story, and every customer becomes
            part of ours. Thank you for supporting Daphy Crochet Shop
            and being part of our journey.
          </p>

          <Link to="/shop" className="about-shop-button">
            Explore Our Collection
          </Link>

        </section>

      </main>
    </>
  );
}

export default About;
