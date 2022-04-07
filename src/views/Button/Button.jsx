export default function Button({ text, className, onClick, active }) {
  return (
    <button
      type="button"
      disabled={active}
      className={className}
      onClick={(e) => onClick()}
    >
      <p className="button__text">{text}</p>
    </button>
  );
}
