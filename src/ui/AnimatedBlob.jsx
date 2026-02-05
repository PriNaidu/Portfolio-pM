import { motion } from "framer-motion";

const AnimatedBlob = ({
  color = "#7c3aed",
  size = 300,
  top,
  left,
  right,
  bottom,
  delay = 0,
  className = "",
}) => {
  const positionStyles = {};
  if (top !== undefined) positionStyles.top = top;
  if (left !== undefined) positionStyles.left = left;
  if (right !== undefined) positionStyles.right = right;
  if (bottom !== undefined) positionStyles.bottom = bottom;

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, ${color}00 70%)`,
        filter: "blur(60px)",
        ...positionStyles,
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export default AnimatedBlob;
