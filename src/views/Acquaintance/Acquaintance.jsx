// import Picture from "../../img/lets-get-acquainted.jpg";
import Button from "../Button/Button";
import { ReactComponent as Picture } from "../../img/man-behind-computer.svg";

export default function Acquaintance() {
  return (
    <div className="container">
      <div className="container__tablet">
        <Picture className="image" />
        <div className="acquaitance__info">
          <h2 className="acquaintance__title points">Let's get acquainted</h2>
          <h3 className="acquaintance__semiTitle points">
            I'm a good front-end developer
          </h3>
          <p className="acquaintance__text points">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button text={"Sign up"} className={"button"} />
        </div>
      </div>
    </div>
  );
}
