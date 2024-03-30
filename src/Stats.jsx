import { INSTAGRAM_MAX_CHAR, META_MAX_CHAR } from "./constants";

export default function Stats({ wordCount, characterCount }) {
  return (
    <section className="stats">
      <Stat label="Words" count={wordCount} />
      <Stat label="Characters" count={characterCount} />
      <Stat label="Instagram" count={INSTAGRAM_MAX_CHAR - characterCount} />
      <Stat label="Meta" count={META_MAX_CHAR - characterCount} />
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
