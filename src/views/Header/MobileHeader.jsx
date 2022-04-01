import logo from "img/logo.svg";
import logoText from "img/testtask.png";

export default function MobileHeader() {
  return (
    <div className="mobile__header">
      <a className="logo" href="index.html">
        <img
          src={logo}
          alt="yellow cat that has a shape like triangle letter A"
          className="picture"
        />
        <img src={logoText} alt="logo text TESTTASK" />
      </a>
    </div>
  );
}
