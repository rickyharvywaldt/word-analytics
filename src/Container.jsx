import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const characterCount = text.length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats characterCount={characterCount} />
    </main>
  );
}
