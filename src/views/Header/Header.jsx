import logo from "img/logo.svg";
import logoText from "img/testtask.png";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "views/Mobile-menu/MobileMenu";
import Nav from "../Nav/Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileIsOpen = "mobile__background is-open";
  const mobileIsClosed = "mobile__background";
  const desktop = useMediaQuery({ query: `(min-width:1024px)` });

  function MobileMenuToggle(e) {
    setIsOpen(!isOpen);
  }
  function Close(e) {
    if (
      e.target.className === "mobile__background is-open" ||
      e.target.className === "mobileNavigation__item-link"
    ) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="header">
      <a className="logo" href="index.html">
        <img
          src={logo}
          alt="yellow cat that has a shape like triangle letter A"
          className="picture"
        />
        <img src={logoText} alt="logo text TESTTASK" />
      </a>
      {!desktop && (
        <button
          type="button"
          className="menuButton"
          onClick={(e) => MobileMenuToggle(e)}
        ></button>
      )}
      {isOpen && !desktop ? (
        <MobileMenu className={mobileIsOpen} onClose={Close} />
      ) : (
        <MobileMenu className={mobileIsClosed} onClose={Close} />
      )}
      {desktop && <Nav />}
    </div>
  );
}
