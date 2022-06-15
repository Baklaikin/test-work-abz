import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "views/Button/Button";

export default function Modal({ value }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value === true) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value]);

  function onClose(e) {
    setIsOpen(!isOpen);
  }

  return ReactDOM.createPortal(
    isOpen && (
      <div className="modal__background">
        <div className="modal__window">
          <h2 className="modal__title">Congratulations</h2>
          <p className="modal__text">
            You have successfully passed the registration{" "}
          </p>
          <Button
            className="button button-modal"
            text={"Great"}
            onClick={(e) => onClose(e)}
          />
        </div>
      </div>
    ),
    document.getElementById("portal")
  );
}
