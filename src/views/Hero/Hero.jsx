import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__container">
          <h1 className="hero__title points">
            Test assignment for front-end developers
          </h1>
        </div>
        <div className="hero__textContainer">
          <p className="hero__text points">
            Front-end developers make sure the user sees and interacts with all
            the necessary elements to ensure conversion.
          </p>
        </div>
        <Button text={"Sign up"} />
      </div>
    </div>
  );
}
