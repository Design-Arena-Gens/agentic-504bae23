import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initParticles = () => {
      const particleArray = [];
      const numberOfParticles = particleDensity || 50;

      for (let i = 0; i < numberOfParticles; i++) {
        particleArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }

      setParticles(particleArray);
    };

    initParticles();
  }, [minSize, maxSize, particleDensity]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor || "#FFF"}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
