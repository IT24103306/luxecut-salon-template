<section className="contact-section" id="contact">
  <div className="contact-card">
    <p>VISIT ANN BEAUTY BAR</p>

    <h2>Professional Beauty Salon in Batticaloa</h2>

    <p>
      Visit ANN Beauty Bar in Batticaloa for bridal makeup, nails, lashes,
      brows, hair extensions and professional beauty services.
    </p>

    <div className="contact-details">
      <div>
        <span>ADDRESS</span>
        <p>2nd Cross, Bazaar Street, Batticaloa</p>
      </div>

      <div>
        <span>CALL OR WHATSAPP</span>
        <a href="tel:+94743174347">
          +94 74 317 4347
        </a>
      </div>

      <div>
        <span>FACEBOOK</span>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
        >
          ANN Beauty Bar
        </a>
      </div>

      <div>
        <span>INSTAGRAM</span>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          @annbeautybar_pvt_ltd
        </a>
      </div>
    </div>

    <a
      href="https://www.google.com/maps/search/?api=1&query=ANN+Beauty+Bar+2nd+Cross+Bazaar+Street+Batticaloa"
      target="_blank"
      rel="noreferrer"
      className="map-button"
    >
      Open in Google Maps
    </a>
  </div>

  <div className="contact-image">
    <img
      src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=85"
      alt="ANN Beauty Bar professional beauty salon in Batticaloa"
    />
  </div>
</section>

</main>

<footer className="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <a href="#home" className="footer-logo">
        ANN
      </a>

      <p>
        Professional beauty salon in Batticaloa offering bridal makeup,
        nails, lashes, brows, hair extensions and convenient WhatsApp
        appointment requests.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>

      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#booking">Booking</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-links">
      <h3>Opening Hours</h3>

      <p>Monday – Saturday</p>
      <p>9:00 AM – 5:00 PM</p>
      <p>Sunday: Closed</p>
    </div>

    <div className="footer-links">
      <h3>Connect</h3>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 ANN Beauty Bar (Pvt) Ltd. All rights reserved.</p>
    <p>Batticaloa, Sri Lanka</p>
  </div>
</footer>

<a
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noreferrer"
  className="whatsapp-button"
  aria-label="Contact ANN Beauty Bar in Batticaloa on WhatsApp"
>
  WhatsApp
</a>

</div>
);
}

export default App;
