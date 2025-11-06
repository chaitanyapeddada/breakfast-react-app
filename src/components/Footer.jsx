
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="info-container">
        
        <div className="contact-info">
          <address>
            <p className="address">
              📍 Main road, near mettavalasa, Bobbili, Gorla Seetharampuram, Andhra Pradesh 535559
            </p>
            <p className="phone">
              📞 <a href="tel:+916302802174">+91 63028 02174</a>
            </p>
            <p className="email">
              ✉️ <a href="mailto:info@sribalajifood.com">info@sribalajifood.com</a>
            </p>
          </address>
        </div>

        <div className="timing-info">
          <h3>⏰ Open Hours</h3>
          <div className="timing-grid">
            <div className="timing-slot">
              <p className="meal-type">Breakfast</p>
              <p>7:00 AM - 11:00 AM</p>
            </div>
            <div className="timing-slot">
              <p className="meal-type">Lunch</p>
              <p>12:00 PM - 4:00 PM</p>
            </div>
            <div className="timing-slot">
              <p className="meal-type">Dinner</p>
              <p>7:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;