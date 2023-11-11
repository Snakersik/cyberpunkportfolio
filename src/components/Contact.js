import React from "react";

const Contact = () => {
  return (
    <div className="ContactSection">
      <div>
        <h3>KONTAKT</h3>

        <ul class="contact-list">
          <li class="list-item">
            <i class="fa fa-map-marker fa-2x">
              <span class="contact-text place">Przemków</span>
            </i>
          </li>

          <li class="list-item">
            <i class="fa fa-phone fa-2x">
              <span class="contact-text phone">
                <a href="tel:698-264-348" title="Zadzwoń">
                  +48 698 264 348
                </a>
              </span>
            </i>
          </li>

          <li class="list-item">
            <i class="fa fa-envelope fa-2x">
              <span class="contact-text gmail">
                <a href="mailto:konradtratwal@gmail.com" title="Wyślij email">
                  konradtratwal@gmail.com
                </a>
              </span>
            </i>
          </li>
        </ul>
        <ul class="social-media-list">
          <li>
            <a
              href="https://github.com/Snakersik"
              target="_blank"
              class="contact-icon"
              rel="noreferrer"
            >
              <i class="fa fa-github fa-xl" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/konrad-tratwal-625495252/"
              target="_blank"
              class="contact-icon"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin fa-xl" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/users/613112674166898692"
              target="_blank"
              class="contact-icon"
              rel="noreferrer"
            >
              <i class="fa-brands fa-discord fa-xl" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/48698264348"
              target="_blank"
              class="contact-icon"
              rel="noreferrer"
            >
              <i class="fa-brands fa-whatsapp fa-xl" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
      </div>
    </div>
  );
};

export default Contact;
