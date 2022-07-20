import { FiLinkedin, FiGithub, FiInfo } from "react-icons/fi";
import "../Style/Footer.css";

export default function Navbar() {
  return (
    <div className="footer-container">
      <div className="logo-footer">
        <a href="https://www.linkedin.com/in/emma-bgn/">
          <FiLinkedin size="1.5em" />
        </a>
      </div>
      <div className="logo-footer">
        <a href="https://github.com/BignonEmma">
          <FiGithub size="1.5em" />
        </a>
      </div>
      <div className="logo-footer">
        <FiInfo size="1.5em" />
      </div>
    </div>
  );
}
