import Button from "../Button/Button";
import React, { useState } from "react";
import Modal from "views/Modal/Modal";
import { useEffect } from "react";
import { PostUser, GetPosition } from "Api/Api";
import PhotoIcon from "../../img/avatar-icon-images-4.jpg";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    position_id: null,
    photo: PhotoIcon,
  });

  const [active, setActive] = useState(false);
  const [shouldModalOpen, setShouldModalOpen] = useState(false);
  const [positions, setPositions] = useState([]);

  const activate =
    data.name !== "" &&
    data.email !== "" &&
    data.phone !== "" &&
    data.position_id !== null;

  // const fd = new FormData()
  //   fd.append('name', `${data.name}`);
  //   fd.append('email', `${data.email}`)
  //   fd.append('phone', `${data.phone}`);
  //   fd.append('position_id', `${data.position_id}`);
  //   fd.append('photo', `${data.photo}`)
  //   console.log("fd:",Array.from(fd))

  function handle(e) {
    const { name, value } = e.currentTarget;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  }

  useEffect(() => {
    if (activate) {
      setActive(true);
    }
  }, [activate]);

  useEffect(() => {
    GetPosition().then(setPositions);
  }, []);

  function formInfo(e) {
    e.preventDefault();
    const position_number = positions.find((pos) => {
      if (pos.name === data.position_id) {
        return pos;
      }
      return;
    });

    //Creating a formData
    const fd = new FormData();
    fd.append("name", `${data.name}`);
    fd.append("email", `${data.email}`);
    fd.append("phone", `${data.phone}`);
    fd.append("position_id", `${position_number.id}`);
    fd.append("photo", `${data.photo}`);

    // const info = { ...data, position_id: position_number.id }
    PostUser(fd);
    setData({
      name: "",
      email: "",
      phone: "",
      position_id: null,
      photo: PhotoIcon,
    });
    setActive(false);
    setShouldModalOpen(true);
  }

  function onSignUpClick(e) {
    setShouldModalOpen(false);
  }

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

          {/*Radio buttons*/}
          <p className="form__selectPosition">Select your position</p>
          <ul>
            {positions.map((pos) => {
              const { id, name } = pos;
              return (
                <li key={id}>
                  <label className="form__radio-wrapper" value={name}>
                    <input
                      key={id}
                      type="radio"
                      name="position_id"
                      value={name}
                      className="form__radio-input"
                      onClick={(e) => handle(e)}
                    />

                    <span className="customRadioBox">
                      <span></span>
                    </span>
                    <p>{name}</p>
                  </label>
                </li>
              );
            })}
          </ul>

          <Button
            text={"Sign up"}
            className={"signUp__btn"}
            onClick={(e) => onSignUpClick(e)}
            active={active}
          />
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
      </div>
      <Modal value={shouldModalOpen} />
      <div className="paws"></div>
    </section>
  );
}
