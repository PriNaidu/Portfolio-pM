import { motion } from "framer-motion";

const GradientButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download = false,
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-lg px-7 py-3 font-semibold text-sm md:text-base transition-all cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20",
    outline:
      "border border-primary/40 text-primary-light hover:bg-primary/10",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download || undefined}
      target={href && !download ? "_blank" : undefined}
      rel={href && !download ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </Component>
  );
};

export default GradientButton;
