
import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  MessageCircle,
  ShoppingBag,
  Heart,
  Headset,
  Send,
  ArrowRight,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `Hello Daphy Crochet Shop!

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`;

    const whatsappLink = `https://wa.me/250784975438?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  }

  return (
    <>
      <Navbar />

      <main className="professional-contact">

        {/* PAGE HEADER */}
        <section className="contact-header">
          <span className="contact-eyebrow">DAPHY CROCHET SHOP</span>

          <h1>Contact Us</h1>

          <div className="contact-title-line"></div>

          <p>
            We'd love to hear from you. Get in touch with us
            for enquiries, orders and personalised crochet creations.
          </p>
        </section>

        {/* INTRODUCTION */}
        <section className="contact-introduction">
          <span className="contact-section-label">WE ARE HERE FOR YOU</span>

          <h2>How Can We Help You?</h2>

          <p>
            At Daphy Crochet Shop, every customer matters.
            Whether you are interested in our handmade products,
            want to make a custom order, or simply have a question,
            we are here to help.
          </p>
        </section>

        {/* CONTACT INFORMATION CARDS */}
        <section className="contact-cards">

          <div className="contact-card">
            <div className="contact-card-icon">
              <MessageCircle size={25} />
            </div>

            <h3>WhatsApp</h3>

            <p>+250 784 975 438</p>

            <a
              href="https://wa.me/250784975438"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us <ArrowRight size={15} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <ShoppingBag size={25} />
            </div>

            <h3>Product Enquiries</h3>

            <p>Ask about our products and availability.</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Heart size={25} />
            </div>

            <h3>Custom Orders</h3>

            <p>Tell us about your special crochet idea.</p>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Headset size={25} />
            </div>

            <h3>Customer Support</h3>

            <p>We are happy to answer your questions.</p>
          </div>

        </section>

        {/* WHATSAPP CONTACT BANNER */}
        <section className="contact-whatsapp-banner">
          <div>
            <h2>Let's Talk About Your Next Creation</h2>

            <p>
              Have something special in mind?
              We would love to hear your ideas.
            </p>
          </div>

          <a
            href="https://wa.me/250784975438"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>
        </section>

        {/* ENQUIRY FORM */}
        <section className="contact-form-section">

          <div className="contact-form-heading">
            <span className="contact-section-label">
              SEND US A MESSAGE
            </span>

            <h2>Get in Touch</h2>

            <p>
              Fill in the form below and your message will open
              in WhatsApp for you to send to us.
            </p>
          </div>

          <form
            className="professional-contact-form"
            onSubmit={handleSubmit}
          >

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="subject">Subject</label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Choose a subject</option>
                <option value="Product Enquiry">Product Enquiry</option>
                <option value="Custom Order">Custom Order</option>
                <option value="Order Information">Order Information</option>
                <option value="Other Question">Other Question</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="professional-send-button">
              Send Message
              <Send size={18} />
            </button>

          </form>
        </section>

        {/* CLOSING MESSAGE */}
        <section className="contact-closing">
          <div className="contact-closing-line"></div>

          <h2>Thank You for Choosing Handmade</h2>

          <p>
            Your support means so much to us.
            Every order helps our small handmade business grow.
          </p>

          <span>With love,</span>

          <h3>Daphy Crochet Shop</h3>

          <small>HANDMADE WITH LOVE</small>
        </section>

      </main>
    </>
  );
}

export default Contact;
