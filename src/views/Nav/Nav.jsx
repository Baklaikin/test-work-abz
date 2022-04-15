export default function Nav() {
  return (
    <>
      <div className="navigation__wrapper">
        <nav>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#signUp" className="navigation__item-link">
                About me
              </a>
            </li>
            <li className="navigation__item">
              <a href="#signUp" className="navigation__item-link">
                Relationship
              </a>
            </li>
            <li className="navigation__item">
              <a href="#signUp" className="navigation__item-link">
                Users
              </a>
            </li>
            <li className="navigation__item">
              <a href="#signUp" className="navigation__item-link">
                Sign up
              </a>
            </li>
            <li className="navigation__item">
              <a href="#signUp" className="navigation__item-link">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
