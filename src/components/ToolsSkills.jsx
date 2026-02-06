import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import ScrollReveal from "../ui/ScrollReveal";
import { staggerFast, fadeInUp } from "../animations/variants";
import { toolCategories } from "../data/tools";

const ToolsSkills = () => {
  return (
    <SectionWrapper id="tools" className="section-alt">
      {/* Hide blob on small screens */}
      <div className="hidden sm:block">
        <AnimatedBlob color="#06b6d4" size={200} bottom="5%" left="-3%" delay={3} />
      </div>

      <SectionHeading
        title="Tools & Technical Skills"
        subtitle="The tools and technologies I use to research, plan, build, and ship great products"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {toolCategories.map((category, catIndex) => (
          <ScrollReveal key={category.category} delay={catIndex * 0.1}>
            <GlassCard hoverColor={category.color} className="h-full p-4 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <div
                  className="w-1 h-6 sm:h-8 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3
                  className="text-sm sm:text-base font-bold font-heading"
                  style={{ color: category.color }}
                >
                  {category.category}
                </h3>
              </div>

              <p className="text-light-dim text-sm leading-relaxed mb-3 sm:mb-4">
                {category.description}
              </p>

              <motion.div
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-1.5 sm:gap-2"
              >
                {category.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    variants={fadeInUp}
                    className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md font-medium"
                    style={{
                      color: category.color,
                      background: `${category.color}10`,
                      border: `1px solid ${category.color}20`,
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ToolsSkills;
