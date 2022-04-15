export default function Button({ text, className, onClick, active }) {
  if (text === "Sign up") {
    return (
      <button type="button" disabled={active} className={className}>
        <a href="#signUp">
          <div className="button__focus"></div>
          <div className="button__pressed"></div>
          <p className="button__text">{text}</p>
        </a>
      </button>
    );
  } else {
    return (
      <button
        type="button"
        disabled={active}
        className={className}
        onClick={(e) => onClick()}
      >
        <div className="button__focus"></div>
        <div className="button__pressed"></div>
        <p className="button__text">{text}</p>
      </button>
    );
  }
}
