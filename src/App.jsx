import { useState } from "react";
import "./App.css";

const salonServices = [
  "Nail Extensions & Nail Art",
  "Eyelash Extensions",
  "Permanent Hair Extensions",
  "Microblading",
  "Powder Brows",
  "Bridal Makeup",
];

const popularServices = [
  { name: "Nail Extensions & Nail Art", description: "Elegant extensions, clean finishes and statement nail art tailored to your style.", imageClass: "nails-image" },
  { name: "Eyelash Extensions", description: "Soft, defined lash enhancements designed to complement your natural features.", imageClass: "lashes-image" },
  { name: "Permanent Hair Extensions", description: "Beautiful added length and volume, personalised to blend with your own hair.", imageClass: "hair-extensions-image" },
  { name: "Microblading", description: "Natural-looking brow definition shaped to flatter your unique face.", imageClass: "microblading-image" },
  { name: "Powder Brows", description: "A softly shaded, polished brow finish for an effortlessly defined look.", imageClass: "powder-brows-image" },
  { name: "Bridal Makeup", description: "Personalised bridal beauty for traditional ceremonies, receptions and celebrations.", imageClass: "bridal-image" },
];

const whatsappNumber = "94743174347";
const facebookUrl = "https://www.facebook.com/p/ANN-Beauty-Bar-61575069462767/";
const instagramUrl = "https://www.instagram.com/annbeautybar_pvt_ltd?igsi=MTR5dDhjamdiZnE2aw==";
const reviewWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ANN Beauty Bar,\n\nI would like to share my feedback:\n\n")}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const serviceList = selectedServices.map((service) => `- ${service}`).join("\n");
    const message = `Hello ANN Beauty Bar,

I would like to request an appointment.

Name: ${data.get("customerName")}
Phone: ${data.get("phoneNumber")}

Selected Services:
${serviceList}

Preferred Beauty Specialist: ${data.get("stylist")}
Preferred Date: ${data.get("bookingDate")}
Preferred Time: ${data.get("bookingTime")}
Special Request: ${data.get("message") || "None"}

Please confirm the availability and price. Thank you.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="logo" aria-label="ANN Beauty Bar home">
            <span className="logo-mark">A</span>
            <span className="logo-text">
              <span className="logo-main">ANN</span>
              <span className="logo-small">BEAUTY BAR</span>
            </span>
          </a>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[["Home", "home"], ["Services", "services"], ["About", "about"], ["Gallery", "gallery"], ["Contact", "contact"]].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a href="#booking" className="mobile-book-button" onClick={() => setMenuOpen(false)}>Book Appointment</a>
          </div>
          <a href="#booking" className="book-button">Book Appointment</a>
          <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation menu" aria-expanded={menuOpen}>
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="hero-label">WELCOME TO ANN BEAUTY BAR</p>
            <h1>Your Beauty.<br />Our Art.</h1>
            <p className="hero-description">Nails, lashes, hair extensions, brows and bridal beauty services in the heart of Batticaloa.</p>
            <div className="hero-buttons">
              <a href="#booking" className="hero-primary-button">Book via WhatsApp</a>
              <a href="#services" className="hero-secondary-button">Explore Services</a>
            </div>
          </div>
          <div className="hero-hours"><span>MONDAY — SATURDAY</span><p>9:00 AM — 5:00 PM</p></div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <p>WHAT WE OFFER</p><h2>Signature Beauty Services</h2>
            <span>Beauty treatments created to help you look polished, confident and uniquely you.</span>
          </div>
          <div className="services-grid">
            {popularServices.map((service, index) => (
              <article className="service-card" key={service.name}>
                <div className={`service-image ${service.imageClass}`}><span>0{index + 1}</span></div>
                <div className="service-details">
                  <h3>{service.name}</h3><p>{service.description}</p>
                  <div className="service-meta"><span>PERSONALISED SERVICE</span><strong>Price on enquiry</strong></div>
                  <a href="#booking">Request This Service →</a>
                </div>
              </article>
            ))}
          </div>
          <a href="#booking" className="view-services-button">View All Services</a>
        </section>

        <section className="about-section" id="about">
          <div className="about-images">
            <div className="about-main-image"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Beauty service inspiration" /></div>
            <div className="experience-box"><strong>6</strong><span>Specialist Services</span></div>
          </div>
          <div className="about-content">
            <p className="about-label">ABOUT ANN BEAUTY BAR</p><h2>Beauty Made Personal</h2>
            <p className="about-description">ANN Beauty Bar brings specialised beauty services together in one convenient Batticaloa location—from statement nails and lashes to brows, hair extensions and bridal makeup.</p>
            <p className="about-description">Choose the services you are interested in and send your preferred date and time directly through WhatsApp. Our team will confirm availability and pricing with you.</p>
            <div className="about-features">
              {[
                ["Specialised Beauty Services", "Multiple beauty treatments available in one place."],
                ["Personalised Appointments", "Share your preferred service, date and special request."],
                ["Easy WhatsApp Booking", "Send your appointment request directly to our team."],
              ].map(([title, copy]) => (
                <div className="about-feature" key={title}><span>✓</span><div><h3>{title}</h3><p>{copy}</p></div></div>
              ))}
            </div>
            <a href="#booking" className="about-button">Book Your Visit</a>
          </div>
        </section>

        <section className="desi-highlight">
          <div className="desi-highlight-image" role="img" aria-label="Bridal beauty inspiration"></div>
          <div className="desi-highlight-content">
            <p>BRIDAL & CELEBRATION BEAUTY</p>
            <h2>Tradition, Elegance & Your Story</h2>
            <span className="desi-ornament">✦</span>
            <p className="desi-copy">From timeless bridal elegance to modern celebration looks, every detail is designed to complement your outfit, jewellery and personal style.</p>
            <a href="#booking" className="about-button">Plan Your Bridal Look</a>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-heading">
            <p>STYLE INSPIRATION</p><h2>Beauty Gallery</h2>
            <span>Discover beautiful details, polished finishes and looks for every special moment.</span>
          </div>
          <div className="gallery-grid">
            {[
              ["https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85", "Nail artistry inspiration", "Nail Art"],
              ["https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=85", "Eye makeup and lash inspiration", "Lashes"],
              ["https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=85", "Hair extension inspiration", "Hair Extensions"],
              ["https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85", "Bridal hairstyle inspiration", "Bridal Beauty"],
              ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85", "Brow and facial beauty inspiration", "Beautiful Brows"],
              ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=85", "Professional beauty care inspiration", "Beauty Care"],
              ["https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=85", "Elegant salon interior", "Salon Ambience"],
              ["https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85", "Modern salon setting", "Your Beauty Space"],
            ].map(([src, alt, label], index) => (
              <div className={`gallery-item ${index === 0 ? "gallery-large" : ""} ${index === 7 ? "gallery-wide" : ""}`} key={label}>
                <img src={src} alt={alt} /><div className="gallery-overlay"><span>{label}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-information">
            <p className="booking-label">BOOK YOUR VISIT</p><h2>Request an Appointment</h2>
            <p className="booking-description">Select one or more services and share your preferred date and time. Your request will open in WhatsApp for confirmation.</p>
            <div className="booking-contact-list">
              <div><span>PHONE & WHATSAPP</span><a href="tel:+94743174347">+94 74 317 4347</a></div>
              <div><span>LOCATION</span><p>2nd Cross, Bazaar Street, Batticaloa</p></div>
              <div><span>OPENING HOURS</span><p>Monday – Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p></div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleBookingSubmit}>
            <div className="form-row">
              <div className="form-group"><label htmlFor="customerName">Your Name</label><input type="text" id="customerName" name="customerName" placeholder="Enter your name" required /></div>
              <div className="form-group"><label htmlFor="phoneNumber">Phone Number</label><input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+94 7X XXX XXXX" required /></div>
            </div>
            <fieldset className="services-selection">
              <legend>Select Services</legend><p className="selection-help">You can select more than one service.</p>
              <div className="service-checkbox-grid">
                {salonServices.map((service) => (
                  <label className="service-checkbox" key={service}>
                    <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => toggleService(service)} />
                    <span><strong>{service}</strong><small>Price confirmed by ANN Beauty Bar</small></span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="booking-summary">
              <div><span>SELECTED SERVICES</span><strong>{selectedServices.length}</strong></div>
              <div><span>PRICE</span><strong>Confirmed via WhatsApp</strong></div>
            </div>
            <div className="form-group"><label htmlFor="stylist">Preferred Beauty Specialist</label><select id="stylist" name="stylist" defaultValue="No Preference"><option value="No Preference">No Preference</option><option value="ANN Beauty Bar Team">ANN Beauty Bar Team</option></select></div>
            <div className="form-row">
              <div className="form-group"><label htmlFor="bookingDate">Preferred Date</label><input type="date" id="bookingDate" name="bookingDate" required /></div>
              <div className="form-group"><label htmlFor="bookingTime">Preferred Time</label><input type="time" id="bookingTime" name="bookingTime" required /></div>
            </div>
            <div className="form-group"><label htmlFor="message">Special Request</label><textarea id="message" name="message" rows="4" placeholder="Tell us the look or service you need"></textarea></div>
            <button type="submit" className="submit-booking-button">Continue on WhatsApp</button>
            <p className="booking-note">This is an appointment request. ANN Beauty Bar will confirm the time and price through WhatsApp.</p>
          </form>
        </section>

        <section className="review-collection-section" id="reviews">
          <div className="review-collection-card">
            <div className="review-quote-mark">“</div>
            <p className="review-label">CUSTOMER REVIEWS</p>
            <h2>Your Experience Matters</h2>
            <div className="review-stars-display">★★★★★</div>
            <p className="review-collection-copy">
              Verified customer stories will be featured here soon. Visited
              ANN Beauty Bar? Share your experience with us on WhatsApp.
            </p>
            <a href={reviewWhatsappUrl} target="_blank" rel="noreferrer" className="review-button">
              Share Your Review
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <p>VISIT ANN BEAUTY BAR</p><h2>Your Next Beauty Moment Starts Here</h2>
            <div className="contact-details">
              <div><span>ADDRESS</span><p>2nd Cross, Bazaar Street, Batticaloa</p></div>
              <div><span>CALL OR WHATSAPP</span><a href="tel:+94743174347">+94 74 317 4347</a></div>
              <div><span>FACEBOOK</span><a href={facebookUrl} target="_blank" rel="noreferrer">ANN Beauty Bar</a></div>
              <div><span>INSTAGRAM</span><a href={instagramUrl} target="_blank" rel="noreferrer">@annbeautybar_pvt_ltd</a></div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=ANN+Beauty+Bar+2nd+Cross+Bazaar+Street+Batticaloa" target="_blank" rel="noreferrer" className="map-button">Open in Google Maps</a>
          </div>
          <div className="contact-image"><img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=85" alt="Beauty salon interior inspiration" /></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand"><a href="#home" className="footer-logo">ANN</a><p>Specialist beauty services and convenient WhatsApp appointment requests in Batticaloa.</p></div>
          <div className="footer-links"><h3>Quick Links</h3><a href="#home">Home</a><a href="#services">Services</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#booking">Booking</a></div>
          <div className="footer-links"><h3>Opening Hours</h3><p>Monday – Saturday</p><p>9:00 AM – 5:00 PM</p><p>Sunday: Closed</p></div>
          <div className="footer-links"><h3>Connect</h3><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook</a></div>
        </div>
        <div className="footer-bottom"><p>© 2026 ANN Beauty Bar (Pvt) Ltd. All rights reserved.</p><p>Batticaloa, Sri Lanka</p></div>
      </footer>

      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="whatsapp-button" aria-label="Contact ANN Beauty Bar on WhatsApp">WhatsApp</a>
    </div>
  );
}

export default App;
