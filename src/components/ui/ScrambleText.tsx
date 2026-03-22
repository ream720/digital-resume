import React, { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ScrambleText({ text, className = '', duration = 1200, delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(() => 
    text.split('').map(char => char === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('')
  );

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      let iteration = 0;
      // We want to update the scramble roughly every 30-40ms
      const intervalSpeed = 30;
      const totalSteps = duration / intervalSpeed;
      // How much of the string do we reveal per step?
      const lettersPerStep = text.length / totalSteps;

      intervalId = setInterval(() => {
        setDisplayText((currentText) => {
          return text
            .split('')
            .map((letter, index) => {
              if (letter === ' ') return ' ';
              if (index < iteration) {
                return letter;
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('');
        });

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text);
        }

        iteration += lettersPerStep;
      }, intervalSpeed);

    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, duration, delay]);

  return <span className={className}>{displayText}</span>;
}
