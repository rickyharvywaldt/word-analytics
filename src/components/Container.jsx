import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s/).filter((word) => word !== "").length;
  const characterCount = text.length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats wordCount={wordCount} characterCount={characterCount} />
    </main>
  );
}
