import Nav from "../Nav/Nav";
import MobileHeader from "views/Header/MobileHeader";
export default function MobileMenu({ className, onClose }) {
  return (
    <div className={className} onClick={(e) => onClose(e)}>
      <div className="mobile__wrapper">
        <MobileHeader />
        <div className="mobile__section">
          <Nav />
        </div>
        <div className="mobile__bottom"></div>
      </div>
    </div>
  );
}
