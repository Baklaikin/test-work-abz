import Picture from "../../img/lets-get-acquainted.jpg";
import Button from "../Button/Button";

export default function Acquaintance() {
  return (
    <div className="container">
      <img
        src={Picture}
        alt="A man sitting behind the computer"
        className="image"
      />
      <h2 className="acquaintance__title">Let's get acquainted</h2>
      <h3 className="acquaintance__semiTitle">
        I'm a good front-end developer
      </h3>
      <p className="acquaintance__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button />
    </div>
  );
}
