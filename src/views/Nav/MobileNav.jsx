export default function MobileNav({ onClose }) {
  return (
    <>
      <div className="mobileNavigation__wrapper">
        <nav>
          <ul>
            <li className="mobileNavigation__item">
              <a href="#signUp" className="mobileNavigation__item-link">
                About me
              </a>
            </li>
            <li className="mobileNavigation__item">
              <a href="#signUp" className="mobileNavigation__item-link">
                Relationship
              </a>
            </li>
            <li className="mobileNavigation__item">
              <a href="#signUp" className="mobileNavigation__item-link">
                Users
              </a>
            </li>
            <li className="mobileNavigation__item">
              <a href="#signUp" className="mobileNavigation__item-link">
                Sign up
              </a>
            </li>
            <li className="mobileNavigation__item">
              <a href="#signUp" className="mobileNavigation__item-link">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobileNavigation__wrapper">
        <ul>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              How it works
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Partnership
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Help
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Level testimonial
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="mobileNavigation__wrapper">
        <ul>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Articles
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Our news
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Testimonials
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Licenses
            </a>
          </li>
          <li className="mobileNavigation__item">
            <a href="/" className="mobileNavigation__item-link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
