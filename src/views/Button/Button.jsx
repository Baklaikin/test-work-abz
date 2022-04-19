export default function Button({ text, className, onClick, active }) {
  if (text === "Sign up" && className !== "signUp__btn") {
    return (
      <button type="button" disabled={active} className={className}>
        <a href="#signUp">
          <div className="button__focus"></div>
          <div className="button__pressed"></div>
          <p className="button__text">{text}</p>
        </a>
      </button>
    );
  } else if (text === "Sign up" && className === "signUp__btn") {
    return (
      <button
        type="submit"
        className={className}
        disabled={!active}
        onClick={(e) => onClick(e)}
      >
        <div className="button__focus"></div>
        <div className="button__pressed"></div>
        <p className="button__text">{text}</p>
      </button>
    );
  } else {
    return (
      <button
        type="button"
        disabled={active}
        className={className}
        onClick={(e) => onClick(e)}
      >
        <div className="button__focus"></div>
        <div className="button__pressed"></div>
        <p className="button__text">{text}</p>
      </button>
    );
  }
}
