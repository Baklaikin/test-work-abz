import logo from "img/logo.svg";
import logoText from "img/testtask.png";
import { useState, useEffect } from "react";
import MobileMenu from "views/Mobile-menu/MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileIsOpen = "mobile__background is-open";
  const mobileIsClosed = "mobile__background";
  function MobileMenuToggle(e) {
    setIsOpen(!isOpen);
  }
  function Close(e) {
    if (e.target.className === "mobile__background is-open") {
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
      <button
        type="button"
        className="menuButton"
        onClick={(e) => MobileMenuToggle(e)}
      ></button>
      {isOpen ? (
        <MobileMenu className={mobileIsOpen} onClose={Close} />
      ) : (
        <MobileMenu className={mobileIsClosed} />
      )}
    </div>
  );
}
