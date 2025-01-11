export default function NumBox({ number, label }) {
  return (
    <div className="num-box">
      <h4>{number}</h4>
      <p>{label}</p>
    </div>
  );
}