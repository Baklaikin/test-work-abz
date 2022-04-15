import { useMediaQuery } from "react-responsive";
import Button from "../Button/Button";

export default function Hero() {
  const mobile = useMediaQuery({ query: `(max-width:767px)` });
  const mobileText = `Front-end developers make sure the user sees and interacts with all
the necessary elements to ensure conversion.`;
  const text = `Front-end developers make sure the user sees and interacts with all the 
necessary elements to ensure conversion. Therefore, responsive design, programming languages
and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.`;

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__container">
          <h1 className="hero__title points">
            Test assignment for front-end developers
          </h1>
        </div>
        <div className="hero__textContainer">
          <p className="hero__text points">{mobile ? mobileText : text}</p>
        </div>
        <Button text={"Sign up"} className={"button"} />
      </div>
    </div>
  );
}
