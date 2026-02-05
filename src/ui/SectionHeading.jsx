import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading gradient-text inline-block">
        {title}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
      {subtitle && (
        <p className="text-light-dim mt-4 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
