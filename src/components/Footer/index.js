import React from "react";
import logo from "../../components/assets/logodescauto.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterWrap">
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <div className="SocialLogo" to="/">
              {" "}
              <img src={logo} alt="logo" />
            </div>
            <div className="SocialIcons">
              <a
                className="SocialIconLink"
                href="https://www.facebook.com/DescautoAcessorios/?__tn__=HHH-R"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                className="SocialIconLink"
                href="https://www.instagram.com/descauto.acessorios/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
