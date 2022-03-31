import Button from "../Button/Button";

export default function Form() {
  return (
    <section className="form__wrapper">
      <div className="container">
        <div className="form__titleContainer">
          <h2 className="form__title">Register to get a work</h2>
        </div>
        <h3 className="form__text">
          Your personal data is stored according to the Privacy Policy
        </h3>

        <form name="register" autoComplete="on" className="form">
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="text"
                name="name"
                className="inputs"
                placeholder=" "
                pattern="[A-Za-zА-Яа-я]{3,}"
                required
              />
              <p className="register__labelText">Your name</p>
            </div>
          </label>
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="email"
                name="email"
                className="inputs"
                placeholder=" "
                pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                required
              />
              <p className="register__labelText">Email</p>
            </div>
          </label>
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="tel"
                name="phone"
                className="inputs"
                placeholder=" "
                pattern="[+38]{3}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                required
              />
              <p className="register__labelText">Phone</p>
            </div>
          </label>
        </form>
        <p className="form__selectPosition">Select your position</p>
        <form className="form__radio">
          <label className="form__radio-wrapper">
            <input
              type="radio"
              name="position"
              value="Frontend developer"
              className="form__radio-input"
            />
            <span className="customRadioBox">
              <span></span>
            </span>
            <p>Frontend developer</p>
          </label>
          <label className="form__radio-wrapper">
            <input
              type="radio"
              name="position"
              value="Backend developer"
              className="form__radio-input"
            />
            <span className="customRadioBox">
              <span></span>
            </span>
            <p>Backend developer</p>
          </label>
          <label className="form__radio-wrapper">
            <input
              type="radio"
              name="position"
              value="Designer"
              className="form__radio-input"
            />
            <span className="customRadioBox">
              <span></span>
            </span>
            <p>Designer</p>
          </label>
          <label className="form__radio-wrapper">
            <input
              type="radio"
              name="position"
              value="QA"
              className="form__radio-input"
            />
            <span className="customRadioBox">
              <span></span>
            </span>
            <p>QA</p>
          </label>
        </form>
        <div className="upload">
          <button className="upload__button">Upload</button>
          <input
            type="text"
            placeholder="Upload your photo"
            className="upload__input"
          />
        </div>
        <div className="signUp-btn">
          <Button text={"Sign up"} className={"signUp-btn"} />
        </div>
      </div>
      <div className="paws"></div>
    </section>
  );
}
