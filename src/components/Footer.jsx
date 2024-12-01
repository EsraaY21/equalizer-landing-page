import logo from "/logo.svg";
import iconFacebook from "/icon-facebook.svg";
import iconInstagram from "/icon-instagram.svg";
import iconTwitter from "/icon-twitter.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />

        <div className="flex_icons_text">
          <div className="copyrights text-5">
            <p>All rights reserved © Equalizer 2021</p>
            <p>
              Have any problems? Contact us via social media or email us at{" "}
            </p>
            <p className="fw-bold">equalizer@example.com</p>
          </div>

          <div className="icons">
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconInstagram} alt="Instagram" />
            <img src={iconTwitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}
