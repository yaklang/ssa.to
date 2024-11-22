import React, { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const frameRef = useRef(0);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    let frame = 0;
    const length = text.length;
    const queue = Array.from({ length }, (_, i) => ({
      from: '',
      to: text[i],
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20) + 20,
      char: '',
    }));

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const update = () => {
      let output = '';
      let complete = true;

      for (let i = 0; i < length; i++) {
        const { from, to, start, end } = queue[i];
        
        if (frame >= end) {
          output += to;
        } else if (frame >= start) {
          complete = false;
          if (Math.random() < 0.28) {
            queue[i].char = randomChar();
          }
          output += queue[i].char;
        } else {
          complete = false;
          output += from;
        }
      }

      setDisplayText(output);

      if (!complete) {
        frameRef.current = requestAnimationFrame(update);
        frame++;
      }
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text]);

  return (
    <div className={`font-mono text-3xl font-bold text-gray-800 ${className}`}>
      {displayText}
    </div>
  );
};

export default TextScramble;