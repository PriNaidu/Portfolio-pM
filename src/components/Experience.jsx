import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import { staggerContainer, fadeInUp } from "../animations/variants";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="section-alt">
      <AnimatedBlob color="#f59e0b" size={250} top="5%" right="-8%" delay={1} />

      <SectionHeading
        title="Experience"
        subtitle="My journey from frontend developer to product-minded engineer — each role building the skills and perspective I bring to product management"
      />

      {/* Center-aligned timeline for desktop, left-aligned for mobile */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline center line - Desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        {/* Timeline left line - Mobile */}
        <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-0.5">
          <motion.div
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="relative space-y-12"
        >
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline Dot - Desktop (centered) */}
                <motion.div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full border-2 border-dark z-10"
                  style={{ backgroundColor: exp.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                />

                {/* Timeline Dot - Mobile (left) */}
                <motion.div
                  className="md:hidden absolute left-0 top-8 w-6 h-6 rounded-full border-2 border-dark z-10"
                  style={{ backgroundColor: exp.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                />

                {/* Connector line from dot to card - Desktop */}
                <div
                  className={`hidden md:block absolute top-[38px] h-px w-8 bg-white/10 ${
                    isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2"
                  }`}
                />

                {/* Card layout - alternating sides on desktop, right-aligned on mobile */}
                <div
                  className={`pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <GlassCard hoverColor={exp.color} className="p-5 md:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold font-heading text-light">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="font-semibold text-sm"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </span>
                          {exp.type && (
                            <span className="text-xs text-light-dim bg-white/5 px-2 py-0.5 rounded">
                              {exp.type}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-light-dim bg-white/5 px-2.5 py-1 rounded-lg whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-light-dim text-sm leading-relaxed mb-3">
                      {exp.summary}
                    </p>

                    {/* Highlight badges */}
                    {exp.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-md"
                            style={{
                              color: exp.color,
                              background: `${exp.color}12`,
                              border: `1px solid ${exp.color}25`,
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Key bullet points - show top 3 */}
                    <ul className="space-y-2">
                      {exp.description.slice(0, 3).map((point, i) => (
                        <li
                          key={i}
                          className="text-sm text-light-dim leading-relaxed flex gap-2.5"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
