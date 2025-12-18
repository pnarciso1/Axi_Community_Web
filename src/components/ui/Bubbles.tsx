'use client';

import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles: Bubble[] = [];
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 60 + 20,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 10,
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="bubbles">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

