import React, { useEffect, useState } from "react";

/**
 * Typing effect for multiline headline
 * Use \n for a new line in the text
 */
export default function TypingHeadline({
  text = "",
  speed = 60,
  loop = false,
  className = ""
}) {
  const [display, setDisplay] = useState("");
  const [pos, setPos] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let timer;

    if (!loop) {
      if (pos < text.length) {
        timer = setTimeout(() => {
          setDisplay((d) => d + text[pos]);
          setPos((p) => p + 1);
        }, speed);
      }
    } else {
      // type forward
      if (direction === 1) {
        if (pos < text.length) {
          timer = setTimeout(() => {
            setDisplay((d) => d + text[pos]);
            setPos(pos + 1);
          }, speed);
        } else {
          timer = setTimeout(() => setDirection(-1), 700);
        }
      }
      // erase backward
      if (direction === -1) {
        if (pos > 0) {
          timer = setTimeout(() => {
            setDisplay((d) => d.slice(0, -1));
            setPos(pos - 1);
          }, speed / 2);
        } else {
          setDirection(1);
        }
      }
    }

    return () => clearTimeout(timer);
  }, [pos, direction, text, speed, loop]);

  const lines = display.split("\n");

  return (
    <div className={`uppercase font-extrabold tracking-tight ${className}`}>
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <span className="ml-1 border-r-2 border-white animate-blink"></span>
    </div>
  );
}
