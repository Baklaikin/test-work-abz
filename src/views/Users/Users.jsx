import UserCard from "../UserCard/UserCard";

export default function Users() {
  return (
    <div className="container">
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
    </div>
  );
}
