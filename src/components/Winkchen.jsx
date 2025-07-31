import React, { useState, useEffect } from 'react';
import winkchenEmoji from '/winkchen.webp';

export function Winkchen() {
  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't show emoji if clicking on interactive elements
      if (e.target.tagName === 'BUTTON' || 
          e.target.tagName === 'A' || 
          e.target.tagName === 'INPUT' ||
          e.target.closest('button') ||
          e.target.closest('a') ||
          e.target.closest('input')) {
        return;
      }

      const newEmoji = {
        id: Date.now(),
        x: e.clientX - 30,
        y: e.clientY - 30,
        timestamp: Date.now()
      };

      setEmoji(newEmoji);

      // Remove emoji after animation
      setTimeout(() => {
        setEmoji(null);
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!emoji) return null;

  return (
    <img
      src={winkchenEmoji}
      alt="Winkchen"
      className="winkchen-emoji show"
      style={{
        left: `${emoji.x}px`,
        top: `${emoji.y}px`,
        animation: 'scaleIn 0.3s ease-out'
      }}
    />
  );
} 