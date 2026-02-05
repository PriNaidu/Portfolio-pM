import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hoverColor = "#7c3aed" }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      whileHover={{
        y: -5,
        boxShadow: `0 20px 40px ${hoverColor}25`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
