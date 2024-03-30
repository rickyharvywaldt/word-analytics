export default function Stats({ wordCount, characterCount }) {
  return (
    <section className="stats">
      <Stat label="Words" count={wordCount} />
      <Stat label="Characters" count={characterCount} />
      <Stat label="Instagram" count={280 - characterCount} />
      <Stat label="Meta" count={2200 - characterCount} />
    </section>
  );
}

function Stat({ label, count }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${count < 0 ? "stat__number--limit" : ""}`}
      >
        {count}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
