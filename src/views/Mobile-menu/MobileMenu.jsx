import MobileNav from "../Nav/MobileNav";
import MobileHeader from "views/Header/MobileHeader";

export default function MobileMenu({ className, onClose }) {
  return (
    <div className={className} onClick={(e) => onClose(e)}>
      <div className="mobile__wrapper">
        <MobileHeader />
        <div className="mobile__section">
          <MobileNav />
        </div>
        <div className="mobile__bottom"></div>
      </div>
    </div>
  );
}
