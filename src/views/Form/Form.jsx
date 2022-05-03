import Button from "../Button/Button";
import React, { useState } from "react";
import Modal from "views/Modal/Modal";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: null,
  });
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);
  const [shouldModalOpen, setShouldModalOpen] = useState(false);

  function handle(e) {
    const { name, value } = e.currentTarget;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
    const activate =
      data.name !== "" &&
      data.email !== "" &&
      data.phone !== "" &&
      data.position !== "";
    if (activate) {
      setActive(!active);
    }
  }

  function formInfo(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));
    setData({ name: "", email: "", phone: "", position: "", file: null });
    setActive(!active);
    setShouldModalOpen(!shouldModalOpen);
  }

  console.log(data);
  return (
    <section className="form__wrapper">
      <div className="container">
        <div className="form__titleContainer">
          <h2 className="form__title">Register to get a work</h2>
        </div>
        <h3 className="form__text">
          Your personal data is stored according to the Privacy Policy
        </h3>

        {/* Форма регистрации */}
        <form
          id="signUp"
          name="register"
          autoComplete="on"
          className="form"
          onSubmit={formInfo}
        >
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="text"
                name="name"
                className="inputs"
                placeholder=" "
                value={data.name}
                pattern="[A-Za-zА-Яа-я]{2,}"
                required
                onChange={(e) => handle(e)}
              />
              <p className="register__labelText">Your name</p>
            </div>
          </label>
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="email"
                name="email"
                value={data.email}
                className="inputs"
                placeholder=" "
                pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                required
                onChange={(e) => handle(e)}
              />
              <p className="register__labelText">Email</p>
            </div>
          </label>
          <label className="register__label">
            <div className="register__wrapper">
              <input
                type="tel"
                name="phone"
                value={data.phone}
                className="inputs"
                placeholder=" "
                pattern="[+38]{3}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                required
                onChange={(e) => handle(e)}
              />
              <p className="register__labelText">Phone</p>
            </div>
          </label>
          {/* </form> */}
          <p className="form__selectPosition">Select your position</p>

          {/* Чекбоксы */}
          {/* <form className="form__radio"> */}
          <label className="form__radio-wrapper">
            <input
              type="radio"
              name="position"
              value="Frontend developer"
              className="form__radio-input"
              onClick={(e) => handle(e)}
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
              onClick={(e) => handle(e)}
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
              onClick={(e) => handle(e)}
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
              onClick={(e) => handle(e)}
            />
            <span className="customRadioBox">
              <span></span>
            </span>
            <p>QA</p>
          </label>
          <Button
            text={"Sign up"}
            className={"signUp__btn"}
            // onClick={formInfo}
            active={active}
          />
          {/* <button type="submit">Submit</button> */}
        </form>
        <div className="upload">
          <button className="upload__button">Upload</button>
          <label htmlFor="upload__file" className="upload__input">
            <input
              type="file"
              placeholder="Upload your photo"
              id="upload__file"
            />
            <p>Upload your photo</p>
          </label>
        </div>
        {/* <Button
          text={"Sign up"}
          className={"signUp__btn"}
          onClick={formInfo}
          active={active}
        /> */}
      </div>
      <Modal value={true} />
      <div className="paws"></div>
    </section>
  );
}
