import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex overflow-hidden p-[1px]",
        containerClassName
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(90deg, #10b981, #06b6d4, #10b981)"
            : "transparent",
        }}
        animate={{
          rotate: hovered ? 360 : 0,
        }}
        transition={{
          duration: duration,
          repeat: hovered ? Infinity : 0,
          ease: "linear",
        }}
      />
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-full h-full",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};
