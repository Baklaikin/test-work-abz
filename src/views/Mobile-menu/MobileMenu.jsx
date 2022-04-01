import Nav from "../Nav/Nav";
import MobileHeader from "views/Header/MobileHeader";
export default function MobileMenu({ className }) {
  return (
    <div className="mobile__background is-open">
      <div className="mobile__wrapper">
        <MobileHeader />
        <div className="mobile__section">
          <Nav />
        </div>
        {/* <div className="mobile__section"></div> */}
        {/* <div className="mobile__section"></div> */}
      </div>
      <div className="mobile__bottom"></div>
    </div>
  );
}
