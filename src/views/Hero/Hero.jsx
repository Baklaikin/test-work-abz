import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__container">
          <h1 className="hero__title">
            Test assignment for front-end developers
          </h1>
          <h2 className="hero__text">
            Front-end developers make sure the user sees and interacts with all
            the necessary elements to ensure conversion.
          </h2>
          <Button />
        </div>
      </div>
    </div>
  );
}
