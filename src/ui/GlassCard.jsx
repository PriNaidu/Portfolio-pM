import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hoverColor = "#6366f1" }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      whileHover={{
        y: -5,
        boxShadow: `0 20px 50px ${hoverColor}20, 0 0 40px ${hoverColor}08`,
        borderColor: `${hoverColor}30`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
