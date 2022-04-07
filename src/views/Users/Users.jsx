import UserCard from "../UserCard/UserCard";
import Button from "views/Button/Button";
import { GetUsers } from "../../Api/Api";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState(null);
  const [params, setParams] = useState({ page: 1, count: 3 });
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    GetUsers(params).then(setUsers);
  }, [params, disable]);

  function PageCounter() {
    if (page < users.total_pages) {
      setPage(page + 1);
    } else if (page === users.total_pages) {
      setDisable(true);
    }
    setParams({
      page: page,
      count: 3,
    });
  }

  return (
    <div className="container users__wrapper">
      <h2 className="users__title">Our cheerful users</h2>
      <h3 className="users__semiTitle">The best specialists are shown below</h3>
      <ul className="users__list">{users && <UserCard data={users} />}</ul>
      <div className="users__button">
        <Button
          active={disable}
          text={"Show more"}
          className={"button"}
          onClick={PageCounter}
        />
      </div>
    </div>
  );
}
