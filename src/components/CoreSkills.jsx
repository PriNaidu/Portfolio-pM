import { motion } from "framer-motion";
import {
  FaSearchengin,
  FaChessKnight,
  FaRocket,
  FaListOl,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa6";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import { staggerContainer, fadeInUp } from "../animations/variants";
import { coreSkills } from "../data/skills";

const iconMap = {
  FaSearchengin,
  FaChessKnight,
  FaRocket,
  FaListOl,
  FaChartLine,
  FaLaptopCode,
};

const CoreSkills = () => {
  return (
    <SectionWrapper id="skills">
      <AnimatedBlob color="#0f766e" size={250} bottom="0%" right="-5%" delay={3} />

      <SectionHeading
        title="Core Product Skills"
        subtitle="The product management toolkit I bring to every challenge — built through formal PM training and real-world product ownership"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {coreSkills.map((skill) => {
          const Icon = iconMap[skill.icon];
          return (
            <motion.div key={skill.title} variants={fadeInUp}>
              <GlassCard hoverColor={skill.color} className="p-6 h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${skill.color}12`,
                      border: `1px solid ${skill.color}25`,
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="text-lg"
                        style={{ color: skill.color }}
                      />
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold font-heading"
                    style={{ color: skill.color }}
                  >
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-light-dim text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Sub-skills */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.subSkills.map((sub) => (
                    <span
                      key={sub}
                      className="text-xs px-2.5 py-1 rounded-md text-light-dim"
                      style={{
                        background: `${skill.color}10`,
                        border: `1px solid ${skill.color}18`,
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default CoreSkills;
