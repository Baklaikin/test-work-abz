import Button from "views/Button/Button";

export default function Modal() {
  return (
    <div className="modal__background">
      <div className="modal__window">
        <h2>Congratulations</h2>
        <p>You have successfully passed the registration </p>
        <Button text={"Great"} />
      </div>
    </div>
  );
}
