export default function UserCard({ data }) {
  if (data) {
    return data.users.map((user) => {
      return (
        <li key={user.id} className="users__item">
          <div className="userCard__thumb">
            <div className="userCard__avatar">
              <img src={user.photo} alt="user face" />
            </div>
            <h2 className="userCard__title threeDots">{user.name}</h2>
            <p className="userCard__text threeDots">{user.position}</p>
            <p className="userCard__text threeDots">{user.email}</p>
            <p className="userCard__text threeDots"> {user.phone}</p>
          </div>
        </li>
      );
    });
  }
}
