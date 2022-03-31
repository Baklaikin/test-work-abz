export default function Button({ text, className }) {
  return (
    <button type="button" className={className}>
      <p>{text}</p>
    </button>
  );
}
