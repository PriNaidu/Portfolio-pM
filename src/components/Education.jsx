import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import { staggerContainer, fadeInUp } from "../animations/variants";
import { education } from "../data/education";

const CgpaRing = ({ cgpa, maxCgpa, color }) => {
  const percentage = cgpa / maxCgpa;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="6"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{
            strokeDashoffset: circumference * (1 - percentage),
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base sm:text-lg font-bold font-heading" style={{ color }}>
          {cgpa}
        </span>
        <span className="text-[10px] sm:text-xs text-light-dim">/ {maxCgpa}</span>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <SectionWrapper id="education">
      {/* Hide blob on small screens */}
      <div className="hidden sm:block">
        <AnimatedBlob color="#6366f1" size={200} top="0%" left="-5%" delay={2} />
      </div>

      <SectionHeading
        title="Education"
        subtitle="The academic foundation that powers my product thinking and technical understanding"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
      >
        {education.map((edu) => (
          <motion.div key={edu.abbreviation} variants={fadeInUp}>
            <GlassCard hoverColor={edu.color} className="relative p-4 sm:p-6 md:p-8 h-full">
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, ${edu.color}, ${edu.color}40)`,
                }}
              />

              <div className="flex items-start gap-3 sm:gap-5 mb-3 sm:mb-4">
                <CgpaRing cgpa={edu.cgpa} maxCgpa={edu.maxCgpa} color={edu.color} />
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-light mb-1">
                    {edu.degree}
                  </h3>
                  <span
                    className="inline-block text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-md mb-1.5 sm:mb-2"
                    style={{
                      color: edu.color,
                      background: `${edu.color}12`,
                      border: `1px solid ${edu.color}25`,
                    }}
                  >
                    {edu.abbreviation}
                  </span>
                  <p className="text-light-dim text-xs sm:text-sm">{edu.institution}</p>
                </div>
              </div>

              <p className="text-light-dim text-sm leading-relaxed">
                {edu.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Education;
