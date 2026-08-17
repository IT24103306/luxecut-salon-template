import { useState } from "react";
import "./App.css";
const salonServices = [
  {
    name: "Haircut & Styling",
    price: 1500,
  },
  {
    name: "Hair Colouring",
    price: 5000,
  },
  {
    name: "Facial Treatment",
    price: 3500,
  },
  {
    name: "Beard Grooming",
    price: 1000,
  },
  {
    name: "Bridal Service",
    price: 15000,
  },
  {
    name: "Hair Treatment",
    price: 4000,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

const toggleService = (service) => {
  setSelectedServices((currentServices) => {
    const alreadySelected = currentServices.some(
      (item) => item.name === service.name,
    );

    if (alreadySelected) {
      return currentServices.filter(
        (item) => item.name !== service.name,
      );
    }

    return [...currentServices, service];
  });
};

const totalPrice = selectedServices.reduce(
  (total, service) => total + service.price,
  0,
);

const handleBookingSubmit = (event) => {
  event.preventDefault();

  if (selectedServices.length === 0) {
    alert("Please select at least one service.");
    return;
  }

  const formData = new FormData(event.currentTarget);

  const customerName = formData.get("customerName");
  const phoneNumber = formData.get("phoneNumber");
  const stylist = formData.get("stylist");
  const bookingDate = formData.get("bookingDate");
  const bookingTime = formData.get("bookingTime");
  const specialRequest = formData.get("message");

  const serviceList = selectedServices
    .map(
      (service) =>
        `- ${service.name} - LKR ${service.price.toLocaleString()}`,
    )
    .join("\n");

  const whatsappMessage = `
Hello LuxeCut Salon,

I would like to request an appointment.

Name: ${customerName}
Phone: ${phoneNumber}

Selected Services:
${serviceList}

Estimated Total: LKR ${totalPrice.toLocaleString()}
Preferred Stylist: ${stylist}
Date: ${bookingDate}
Time: ${bookingTime}
Special Request: ${specialRequest || "None"}

Please confirm my appointment.
  `.trim();

  const salonWhatsAppNumber = "94771234567";

  const whatsappUrl = `https://wa.me/${salonWhatsAppNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  window.open(whatsappUrl, "_blank");
};
  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="logo">
            <span className="logo-main">LUXECUT</span>
            <span className="logo-small">SALON</span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="#booking"
              className="mobile-book-button"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>

          <a href="#booking" className="book-button">
            Book Appointment
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-label">WELCOME TO LUXECUT</p>

            <h1>
              Your Style.
              <br />
              Our Passion.
            </h1>

            <p className="hero-description">
              Experience professional salon care designed to make you look
              confident and feel your absolute best.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="hero-primary-button">
                Book Appointment
              </a>

              <a href="#services" className="hero-secondary-button">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-hours">
            <span>OPEN TODAY</span>
            <p>9:00 AM — 7:00 PM</p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="section-heading">
            <p>WHAT WE OFFER</p>
            <h2>Our Popular Services</h2>

            <span>
              Professional care tailored to your style, beauty and confidence.
            </span>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <article className="service-card">
              <div className="service-image haircut-image">
                <span>01</span>
              </div>

              <div className="service-details">
                <h3>Haircut & Styling</h3>

                <p>
                  Professional cuts and styling designed to match your
                  personality.
                </p>

                <div className="service-meta">
                  <span>30–45 MIN</span>
                  <strong>From LKR 1,500</strong>
                </div>

                <a href="#booking">Book This Service →</a>
              </div>
            </article>

            {/* Service 2 */}
            <article className="service-card">
              <div className="service-image colouring-image">
                <span>02</span>
              </div>

              <div className="service-details">
                <h3>Hair Colouring</h3>

                <p>
                  Modern colouring treatments using professional-quality
                  products.
                </p>

                <div className="service-meta">
                  <span>60–120 MIN</span>
                  <strong>From LKR 5,000</strong>
                </div>

                <a href="#booking">Book This Service →</a>
              </div>
            </article>

            {/* Service 3 */}
            <article className="service-card">
              <div className="service-image facial-image">
                <span>03</span>
              </div>

              <div className="service-details">
                <h3>Facial Treatment</h3>

                <p>
                  Refreshing skincare treatments for a healthy and confident
                  glow.
                </p>

                <div className="service-meta">
                  <span>45–60 MIN</span>
                  <strong>From LKR 3,500</strong>
                </div>

                <a href="#booking">Book This Service →</a>
              </div>
            </article>
          </div>

          <a href="#all-services" className="view-services-button">
            View All Services
          </a>
        </section>
          {/* About Section */}
<section className="about-section" id="about">
  <div className="about-images">
    <div className="about-main-image">
      <img
        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
        alt="Professional salon service"
      />
    </div>

    <div className="experience-box">
      <strong>10+</strong>
      <span>Years of Experience</span>
    </div>
  </div>

  <div className="about-content">
    <p className="about-label">ABOUT LUXECUT</p>

    <h2>Beauty Begins With Confidence</h2>

    <p className="about-description">
      At LuxeCut, we believe every client deserves professional care,
      personal attention and a style that reflects their unique personality.
    </p>

    <p className="about-description">
      Our experienced professionals combine modern techniques with
      high-quality products to deliver comfortable and memorable salon
      experiences.
    </p>

    <div className="about-features">
      <div className="about-feature">
        <span>✓</span>

        <div>
          <h3>Professional Experts</h3>
          <p>Experienced professionals focused on quality and care.</p>
        </div>
      </div>

      <div className="about-feature">
        <span>✓</span>

        <div>
          <h3>Premium Products</h3>
          <p>Trusted products selected for safe and beautiful results.</p>
        </div>
      </div>

      <div className="about-feature">
        <span>✓</span>

        <div>
          <h3>Clean Environment</h3>
          <p>A comfortable, hygienic and welcoming salon environment.</p>
        </div>
      </div>
    </div>

    <a href="#booking" className="about-button">
      Book Your Visit
    </a>
  </div>
</section>
        {/* Gallery Section */}
<section className="gallery-section" id="gallery">
  <div className="section-heading">
    <p>OUR WORK</p>
    <h2>Style Gallery</h2>
    <span>
      Explore some of our latest styles, treatments and transformations.
    </span>
  </div>

  <div className="gallery-grid">
    <div className="gallery-item gallery-large">
      <img
        src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85"
        alt="Professional hairstyle"
      />
      <div className="gallery-overlay">
        <span>Hair Styling</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85"
        alt="Modern salon interior"
      />
      <div className="gallery-overlay">
        <span>Our Salon</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
        src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=85"
        alt="Hair treatment"
      />
      <div className="gallery-overlay">
        <span>Hair Treatment</span>
      </div>
    </div>

    <div className="gallery-item">
      <img
        src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=85"
        alt="Professional haircut"
      />
      <div className="gallery-overlay">
        <span>Haircut</span>
      </div>
    </div>

    <div className="gallery-item gallery-wide">
      <img
        src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=1000&q=85"
        alt="Salon hair colouring"
      />
      <div className="gallery-overlay">
        <span>Hair Colouring</span>
      </div>
    </div>
  </div>
</section>
            {/* Booking Section */}
<section className="booking-section" id="booking">
  <div className="booking-information">
    <p className="booking-label">BOOK YOUR VISIT</p>

    <h2>Reserve Your Appointment</h2>

    <p className="booking-description">
      Choose your preferred service, date and time. Our team will contact you
      to confirm your appointment.
    </p>

    <div className="booking-contact-list">
      <div>
        <span>PHONE</span>
        <a href="tel:+94771234567">+94 77 123 4567</a>
      </div>

      <div>
        <span>EMAIL</span>
        <a href="mailto:hello@luxecut.lk">hello@luxecut.lk</a>
      </div>

      <div>
        <span>OPENING HOURS</span>
        <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
      </div>
    </div>
  </div>
<form
  className="booking-form"
  onSubmit={handleBookingSubmit}
>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="customerName">Your Name</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="+94 77 123 4567"
          required
        />
      </div>
    </div>

       <fieldset className="services-selection">
  <legend>Select Services</legend>

  <p className="selection-help">
    You can select more than one service.
  </p>

  <div className="service-checkbox-grid">
    {salonServices.map((service) => {
      const checked = selectedServices.some(
        (item) => item.name === service.name,
      );

      return (
        <label
          className="service-checkbox"
          key={service.name}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() => toggleService(service)}
          />

          <span>
            <strong>{service.name}</strong>

            <small>
              From LKR {service.price.toLocaleString()}
            </small>
          </span>
        </label>
      );
    })}
  </div>
</fieldset>

<div className="booking-summary">
  <div>
    <span>SELECTED SERVICES</span>
    <strong>{selectedServices.length}</strong>
  </div>

  <div>
    <span>ESTIMATED TOTAL</span>
    <strong>LKR {totalPrice.toLocaleString()}</strong>
  </div>
</div>

<div className="form-group">
  <label htmlFor="stylist">Preferred Stylist</label>

  <select
    id="stylist"
    name="stylist"
    defaultValue="No Preference"
  >
    <option value="No Preference">No Preference</option>
    <option value="Nethmi - Hair Specialist">
      Nethmi — Hair Specialist
    </option>
    <option value="Akash - Barber">
      Akash — Barber
    </option>
    <option value="Sarah - Beauty Specialist">
      Sarah — Beauty Specialist
    </option>
  </select>
</div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="bookingDate">Preferred Date</label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="bookingTime">Preferred Time</label>

        <select
          id="bookingTime"
          name="bookingTime"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Choose a time
          </option>

          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="12:00">12:00 PM</option>
          <option value="14:00">2:00 PM</option>
          <option value="15:00">3:00 PM</option>
          <option value="16:00">4:00 PM</option>
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="message">Special Request</label>

      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Enter any additional information"
      ></textarea>
    </div>

    <button type="submit" className="submit-booking-button">
      Request Appointment
    </button>

    <p className="booking-note">
      Your appointment will be confirmed through phone or WhatsApp.
    </p>
  </form>
</section>
          {/* Reviews Section */}
<section className="reviews-section">
  <div className="section-heading">
    <p>CLIENT REVIEWS</p>
    <h2>What Our Clients Say</h2>
    <span>
      Real experiences from clients who trusted us with their style.
    </span>
  </div>

  <div className="reviews-grid">
    <article className="review-card">
      <div className="review-stars">★★★★★</div>

      <p>
        The service was excellent and the staff made me feel completely
        comfortable. I absolutely loved my new hairstyle.
      </p>

      <div className="review-client">
        <div className="client-avatar">S</div>

        <div>
          <h3>Sarah Fernando</h3>
          <span>Hair Styling Client</span>
        </div>
      </div>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>

      <p>
        The salon was clean, professional and welcoming. Booking my
        appointment was also very easy.
      </p>

      <div className="review-client">
        <div className="client-avatar">N</div>

        <div>
          <h3>Niroshan Silva</h3>
          <span>Haircut Client</span>
        </div>
      </div>
    </article>

    <article className="review-card">
      <div className="review-stars">★★★★★</div>

      <p>
        I received exactly the hair colour I requested. The result was
        beautiful and the team was very professional.
      </p>

      <div className="review-client">
        <div className="client-avatar">A</div>

        <div>
          <h3>Amaya Perera</h3>
          <span>Hair Colouring Client</span>
        </div>
      </div>
    </article>
  </div>
</section>

{/* Contact Section */}
<section className="contact-section" id="contact">
  <div className="contact-card">
    <p>VISIT OUR SALON</p>
    <h2>Let’s Create Your Perfect Look</h2>

    <div className="contact-details">
      <div>
        <span>ADDRESS</span>
        <p>123 Main Street, Colombo, Sri Lanka</p>
      </div>

      <div>
        <span>CALL US</span>
        <a href="tel:+94771234567">+94 77 123 4567</a>
      </div>

      <div>
        <span>EMAIL</span>
        <a href="mailto:hello@luxecut.lk">hello@luxecut.lk</a>
      </div>
    </div>

    <a
      href="https://maps.google.com"
      target="_blank"
      rel="noreferrer"
      className="map-button"
    >
      Open Google Maps
    </a>
  </div>

  <div className="contact-image">
    <img
      src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=85"
      alt="LuxeCut salon interior"
    />
  </div>
</section>


      </main>
              <footer className="footer">
  <div className="footer-content">
    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        LUXECUT
      </a>

      <p>
        Professional salon care created to make every client feel confident
        and beautiful.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#booking">Booking</a>
    </div>

    <div className="footer-links">
      <h3>Opening Hours</h3>
      <p>Monday – Friday: 9 AM – 7 PM</p>
      <p>Saturday: 9 AM – 6 PM</p>
      <p>Sunday: Closed</p>
    </div>

    <div className="footer-links">
      <h3>Follow Us</h3>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        Instagram
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        Facebook
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noreferrer">
        TikTok
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 LuxeCut Salon. All rights reserved.</p>
    <p>Designed for modern salon businesses.</p>
  </div>
</footer>

<a
  href="https://wa.me/94771234567"
  target="_blank"
  rel="noreferrer"
  className="whatsapp-button"
  aria-label="Contact us on WhatsApp"
>
  WhatsApp
</a>
    </div>
  );
}

export default App;