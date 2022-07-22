import "../Style/Bio.css";
import Leaf from "../Assets/Pictures/palmcolo.png";
import Writing from "../Assets/Pictures/writing.png";
import Music from "../Assets/Pictures/music.png";
import Cook from "../Assets/Pictures/recipe-book.png";
import Coding from "../Assets/Pictures/coding.png";
import Read from "../Assets/Pictures/coffee-cup.png";
import Game from "../Assets/Pictures/tv-monitor.png";
import {
  DiMysql,
  DiGit,
  DiPhotoshop,
  DiCss3Full,
  DiHtml5,
  DiJavascript1,
} from "react-icons/di";

export default function Biography() {
  return (
    <div className="container-bio">
      <div className="block-text">
        <div className="top-part">
          <img src={Leaf} alt="leaf" className="leaf-img" />
          <div className="title-block">
            <h2 className="title-bio">who am i ?</h2>
            <div className="border-bottom" />
          </div>
        </div>
        <p className="text-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="block-text">
        <div className="top-part">
          <img src={Leaf} alt="leaf" className="leaf-img" />
          <div className="title-block">
            <h2 className="title-bio">career path</h2>
            <div className="border-bottom" />
          </div>
        </div>
        <p className="text-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="center-block">
        <div className="block-like-skill">
          <div className="block-likes">
            <h2 className="title-likes">what i like</h2>
            <div className="likes-icons">
              <div className="padd-icon">
                <img src={Writing} alt="book" className="logo-likes" />
              </div>
              <div className="padd-icon">
                <img src={Music} alt="leaf" className="logo-likes" />
              </div>
              <div className="padd-icon">
                <img src={Cook} alt="leaf" className="logo-likes" />
              </div>
            </div>
            <div className="likes-icons">
              <div className="padd-icon">
                <img src={Coding} alt="book" className="logo-likes" />
              </div>
              <div className="padd-icon">
                <img src={Read} alt="leaf" className="logo-likes" />
              </div>
              <div className="padd-icon">
                <img src={Game} alt="leaf" className="logo-likes" />
              </div>
            </div>
          </div>
          <div className="border-center" />
          <div className="block-skills">
            <h2 className="title-skills">what i use</h2>
            <div className="skills-icons-desktop">
              <div className="padd-icon">
                <DiHtml5 color="var(--accent-orange)" size="3em" alt="html" />
              </div>
              <div className="padd-icon">
                <DiCss3Full color="var(--accent-green)" size="3em" alt="css" />
              </div>
              <div className="padd-icon">
                <DiJavascript1
                  color="var(--accent-orange)"
                  size="3em"
                  alt="js"
                />
              </div>
            </div>
            <div className="skills-icons-desktop">
              <div className="padd-icon">
                <DiMysql color="var(--accent-green)" size="3em" alt="mysql" />
              </div>
              <div className="padd-icon">
                <DiGit color="var(--accent-orange)" size="3em" alt="git" />
              </div>
              <div className="padd-icon">
                <DiPhotoshop
                  color="var(--accent-green)"
                  size="3em"
                  alt="photoshop"
                />
              </div>
            </div>
            <div className="skills-icons-mobile">
              <div className="padd-icon-skills">
                <DiHtml5 color="var(--accent-orange)" size="1.8em" alt="html" />
              </div>
              <div className="padd-icon-skills">
                <DiCss3Full
                  color="var(--accent-green)"
                  size="1.8em"
                  alt="css"
                />
              </div>
              <div className="padd-icon-skills">
                <DiJavascript1
                  color="var(--accent-orange)"
                  size="1.8em"
                  alt="js"
                />
              </div>
            </div>
            <div className="skills-icons-mobile">
              <div className="padd-icon-skills">
                <DiMysql color="var(--accent-green)" size="1.8em" alt="mysql" />
              </div>
              <div className="padd-icon-skills">
                <DiGit color="var(--accent-orange)" size="1.8em" alt="git" />
              </div>
              <div className="padd-icon-skills">
                <DiPhotoshop
                  color="var(--accent-green)"
                  size="1.8em"
                  alt="photoshop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
