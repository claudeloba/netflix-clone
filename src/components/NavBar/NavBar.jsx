import "./navbar.css";
import logo from "../../assets/Netflix_2015_logo.svg.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [show, setScroll] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav className={`navbar ${show && "navbar__black"}`}>
      <ul className="navbar__ul">
        <a href="/">
          <img
            src={logo}
            alt="company logo"
            className={`navbar__logo ${show && "navbar__logo--scroll"}`}
          />
        </a>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className={`navbar__avatar ${show && "navbar__avatar--scroll"}`}
          />
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
