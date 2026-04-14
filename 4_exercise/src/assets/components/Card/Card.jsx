import "./Card.css";
export default function Name({ name, children }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      {children}
    </div>
  );
}
