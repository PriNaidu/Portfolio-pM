import { motion } from "framer-motion";

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
