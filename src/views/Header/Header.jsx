import logo from "img/logo.svg";
import logoText from "img/testtask.png";

export default function Header() {
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
      <button type="button" className="menuButton"></button>
    </div>
  );
}
