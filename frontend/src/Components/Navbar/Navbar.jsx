// Navbar.jsx
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="container">
      <div id="logo">SportsDunia</div>
      <div id="pages">
        <ul id="pagesUl">
          <li id="pagesUlLi">Home</li>
          <li id="pagesUlLi">About</li>
          <li id="pagesUlLi">What we ar</li>
          <li id="pagesUlLi">Projects</li>
          <li id="pagesUlLi">Get In Touch</li>
        </ul>
      </div>
      <div id="linksLogo">
        <ul id="linksLogoUl">
          <li id="linksLogoUlLi">
            <a
              href="!"
              target="_blank"
              className="custom-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
            </a>
          </li>
          <li id="linksLogoUlLi">
            <a
              href="!"
              target="_blank"
              className="custom-link"
            >
              <FontAwesomeIcon icon={faSquareTwitter} className="fa-icon" />
            </a>
          </li>
          <li id="linksLogoUlLi">
            <a
              href="!"
              target="_blank"
              className="custom-link"
            >
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
