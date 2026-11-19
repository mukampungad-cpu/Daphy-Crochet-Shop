
import Navbar from "../components/Navbar";
import {
  Truck,
  CreditCard,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

function CustomerInformation() {
  return (
    <>
      <Navbar />

      <main className="customer-info-page">
        {/* HERO SECTION */}
        <section className="customer-info-hero">
          <p className="page-label">HERE TO HELP YOU</p>
          <h1>Customer Information</h1>
          <p>
            Everything you need to know before ordering from
            Daphy Crochet Shop.
          </p>
        </section>

        {/* INTRODUCTION */}
        <section className="customer-info-intro">
          <p className="page-label">WELCOME TO DAPHY</p>
          <h2>A Lovely Shopping Experience Starts Here</h2>
          <p>
            Thank you for choosing Daphy Crochet Shop. Every piece is
            handmade with love and care. We want your shopping experience
            to be simple, clear and enjoyable.
          </p>
        </section>

        {/* CUSTOMER INFORMATION CARDS */}
        <section className="customer-info-grid">

          <article className="customer-info-card">
            <div className="customer-info-icon">
              <Truck size={30} />
            </div>
            <h2>Delivery Information</h2>
            <p>
              We will confirm delivery availability and charges based
              on your location.
            </p>
            <p>
              When you send your order, please provide your correct
              province, district, sector and detailed address.
            </p>
            <p>
              Daphy will communicate the delivery arrangements with
              you before your order is confirmed.
            </p>
          </article>

          <article className="customer-info-card">
            <div className="customer-info-icon">
              <CreditCard size={30} />
            </div>
            <h2>Payment Information</h2>
            <p>
              Your order is a request and is not automatically confirmed
              when you send it.
            </p>
            <p>
              We will first check product availability and confirm
              the total amount, including delivery charges where applicable.
            </p>
            <p>
              Payment instructions will be shared directly with you
              after your order details have been confirmed.
            </p>
          </article>

          <article className="customer-info-card">
            <div className="customer-info-icon">
              <RefreshCw size={30} />
            </div>
            <h2>Returns &amp; Exchanges</h2>
            <p>
              We want you to be happy with your handmade purchase.
            </p>
            <p>
              If you receive an incorrect or damaged item, please
              contact Daphy promptly and share details of the issue.
            </p>
            <p>
              Returns and exchanges will be discussed and agreed
              individually before any arrangement is made.
            </p>
          </article>

        </section>

        {/* ORDER PROCESS */}
        <section className="customer-info-process">
          <p className="page-label">SIMPLE AND CLEAR</p>
          <h2>What Happens After You Order?</h2>
          <p className="process-intro">
            Here is how we handle your order from beginning to confirmation.
          </p>

          <div className="customer-info-steps">

            <div className="customer-info-step">
              <span className="step-number">01</span>
              <h3>Send Your Order</h3>
              <p>
                Choose your products and submit your order through WhatsApp.
              </p>
            </div>

            <div className="customer-info-step">
              <span className="step-number">02</span>
              <h3>Order Confirmation</h3>
              <p>
                Daphy checks product availability and confirms your order details.
              </p>
            </div>

            <div className="customer-info-step">
              <span className="step-number">03</span>
              <h3>Payment &amp; Delivery</h3>
              <p>
                Receive payment instructions and agree on delivery arrangements.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="customer-info-contact">
          <div className="contact-icon">
            <MessageCircle size={30} />
          </div>

          <p className="page-label">WE ARE HAPPY TO HELP</p>
          <h2>Have a Question?</h2>
          <p>
            Need help before placing your order? We are happy to assist you.
          </p>

          <a
            href="https://wa.me/250784975438"
            target="_blank"
            rel="noopener noreferrer"
            className="customer-info-whatsapp"
          >
            <MessageCircle size={19} />
            Chat with Daphy on WhatsApp
          </a>
        </section>

      </main>
    </>
  );
}

export default CustomerInformation;
