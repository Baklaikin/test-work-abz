import UserCard from "../UserCard/UserCard";
import Button from "views/Button/Button";

export default function Users() {
  return (
    <div className="container users__wrapper">
      <h2 className="users__title">Our cheerful users</h2>
      <h3 className="users__semiTitle">The best specialists are shown below</h3>
      <ul className="users__list">
        <li className="users__item">
          <UserCard />
        </li>
        <li className="users__item">
          <UserCard />
        </li>
        <li className="users__item">
          <UserCard />
        </li>
      </ul>
      <div className="users__button">
        <Button text={"Show more"} />
      </div>
    </div>
  );
}
