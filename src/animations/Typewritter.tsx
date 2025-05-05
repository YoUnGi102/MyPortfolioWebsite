import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  lines: string[];
  speed?: number;
  pauseBetweenLines?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  lines,
  speed = 50,
  pauseBetweenLines = 500,
}) => {
  const [text, setText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText((prev) => prev + '\n');
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, pauseBetweenLines);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines, speed, pauseBetweenLines]);

  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {text}
      <span className="cursor">|</span>
    </pre>
  );
};

export default Typewriter;
