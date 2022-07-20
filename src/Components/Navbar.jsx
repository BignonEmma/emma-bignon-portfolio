import { Link } from "react-router-dom";
import { FiHome, FiClipboard, FiUser, FiMail } from "react-icons/fi";
import "../Style/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-nav">
        <Link to="/">
          <FiHome size="1.5em" />
        </Link>
      </div>
      <div className="logo-nav">
        <Link to="/Biography">
          <FiUser size="1.5em" />
        </Link>
      </div>
      <div className="logo-nav">
        <Link to="/Projects">
          <FiClipboard size="1.5em" />
        </Link>
      </div>
      <div className="logo-nav">
        <Link to="/ContactMe">
          <FiMail size="1.5em" />
        </Link>
      </div>
    </div>
  );
}
