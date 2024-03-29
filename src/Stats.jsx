export default function Stats() {
  return (
    <section className="stats">
      <Stat label="Words" count={0} />
      <Stat label="Characters" count={0} />
      <Stat label="Instagram" count={280} />
      <Stat label="Meta" count={2200} />
    </section>
  );
}

function Stat({ label, count }) {
  return (
    <section className="stat">
      <span className="stat__number">{count}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
