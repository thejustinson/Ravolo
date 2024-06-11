"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const getRandomPosition = () => {
  const startFromTop = Math.random() < 0.5;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (startFromTop) {
    // Start from the top, go to bottom
    const x = Math.random() < 0.5 ? -windowWidth / 2 : windowWidth / 2;
    return { x, y: windowHeight  };
  } else {
    // Start from the bottom, go to top
    const x = Math.random() < 0.5 ? -windowWidth / 2 : windowWidth / 2;
    return { x, y: -windowHeight };
  }
};

const getRandomInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Comet: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setKey(prev => prev + 1); // Force re-render
    }, getRandomInterval(2000, 5000)); // Random interval between 2-5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, x: 0, y: 0, rotate: -45 }}
      animate={{ opacity: 1, x: position.x, y: position.y, rotate: -45 }}
      transition={{ duration: 1.3 }} // Faster movement
      className="fixed w-[1px] h-12 bg-gradient-to-l to-transparent from-purple-700 rounded"
    />
  );
};

export default Comet;