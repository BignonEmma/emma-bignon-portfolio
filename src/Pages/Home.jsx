import { Link } from "react-router-dom";
import "../Style/Home.css";
import ArrowEnter from "../Assets/Pictures/Arrow_07.png";
import NameImg from "../Assets/Pictures/Group 1.png";

export default function Home() {
  return (
    <div className="home-container">
      <img src={NameImg} alt="emma bignon" className="img-name" />
      <div className="bio-link">
        <Link to="/Biography">
          <img src={ArrowEnter} alt="enter button" className="img-enter" />
        </Link>
      </div>
    </div>
  );
}
