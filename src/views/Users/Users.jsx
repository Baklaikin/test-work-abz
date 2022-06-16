import UserCard from "../UserCard/UserCard";
import Button from "views/Button/Button";
import { GetMobileUsers, GetTabletUsers, GetDesktopUsers } from "../../Api/Api";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Users() {
  const [users, setUsers] = useState(null);
  const [page, setPage] = useState(1);
  const [disable, setDisable] = useState(false);
  const [btnClass, setBtnClass] = useState("button");

  const mobile = useMediaQuery({
    query: "(min-width:320px) and (max-width:767px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const desktop = useMediaQuery({ query: "(min-width:1024px)" });

  useEffect(() => {
    if (mobile) {
      GetMobileUsers(page).then(setUsers);
    }
    if (tablet) {
      GetTabletUsers(page).then(setUsers);
    }
    if (desktop) {
      GetDesktopUsers(page).then(setUsers);
    }
  }, [page, mobile, tablet, desktop]);

  function PageCounter() {
    if (page <= users.total_pages - 1) {
      setPage(page + 1);
      console.log(users.users.length);
    } else {
      setDisable(true);
      setBtnClass("button invisible");
    }
  }

  return (
    <div className="container users__wrapper">
      <h2 className="users__title points">Our cheerful users</h2>
      <h3 className="users__semiTitle points">
        The best specialists are shown below
      </h3>
      <ul className="users__list">{users && <UserCard data={users} />}</ul>
      <div className="users__button">
        <Button
          active={disable}
          text={"Show more"}
          className={btnClass}
          onClick={PageCounter}
        />
      </div>
    </div>
  );
}
