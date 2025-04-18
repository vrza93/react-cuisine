import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          📍{" "}
          <a
            href="https://maps.app.goo.gl/g1SzFj2MYxfhVTcHA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            123 Food St, Flavor Town
          </a>
        </p>
        <p>
          📞 <a href="tel:+123456789">+123 456 789</a>
        </p>
        <p>
          📧 <a href="mailto:contact@restaurant.com">contact@restaurant.com</a>
        </p>
        <div className="socials">
          <a href="#">Facebook</a> | <a href="#">Instagram</a>
        </div>
      </div>
      <br />
      <hr />
      <p className="footer-credit">
        Created with <span className="heart">❤</span> by{" "}
        <a href="https://vrzatech.me" target="_blank" rel="noreferrer">
          Vrza Tech
        </a>
      </p>
    </footer>
  );
}

export default Footer;
