import { motion } from "framer-motion";
import {
  HiLightningBolt,
  HiCode,
  HiUserGroup,
  HiPuzzle,
} from "react-icons/hi";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import ScrollReveal from "../ui/ScrollReveal";
import { staggerContainer, fadeInUp } from "../animations/variants";
import { personalInfo } from "../data/personalInfo";

const whatIBring = [
  {
    icon: HiLightningBolt,
    title: "Outcome-Driven",
    description: "I start with the metric that matters — then work backwards to the feature. Every PRD ties to a measurable outcome.",
    color: "#6366f1",
  },
  {
    icon: HiUserGroup,
    title: "User-Obsessed",
    description: "15+ user interviews, JTBD analysis, and persona mapping. I don't assume — I discover, validate, then build.",
    color: "#06b6d4",
  },
  {
    icon: HiCode,
    title: "Technically Fluent",
    description: "I speak engineering. APIs, system design, trade-offs — I scope what's feasible, not just what's desirable.",
    color: "#f59e0b",
  },
  {
    icon: HiPuzzle,
    title: "Cross-Functional Glue",
    description: "3+ squads, design to QA. I align stakeholders, unblock teams, and keep shipping on cadence.",
    color: "#10b981",
  },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="section-alt">
      {/* Hide blob on small screens */}
      <div className="hidden sm:block">
        <AnimatedBlob color="#6366f1" size={250} top="-5%" right="-5%" delay={1} />
      </div>

      <SectionHeading
        title="About Me"
        subtitle="Product-minded engineer who understands both the code and the customer"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left - Photo + Main Content (3 cols) */}
        <div className="lg:col-span-3">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-accent">
                  <img
                    src="/linkedinprofile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full rounded-2xl object-cover border-3 sm:border-4 border-dark"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-light mb-1 sm:mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-light font-medium text-sm sm:text-base mb-2">
                  {personalInfo.subtitle}
                </p>
                <p className="text-light-dim text-sm leading-relaxed">
                  {personalInfo.aboutParagraph3}
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-light/80 text-sm sm:text-base md:text-sm leading-relaxed">
                {personalInfo.tagline}
              </p>
              <p className="text-light-dim text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutParagraph2}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right - What I Bring (2 cols) */}
        <div className="lg:col-span-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4"
          >
            {whatIBring.map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <GlassCard hoverColor={item.color} className="py-4 sm:py-5 h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon
                      className="text-xl sm:text-2xl shrink-0"
                      style={{ color: item.color }}
                    />
                    <div
                      className="font-bold font-heading text-sm sm:text-base"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p className="text-light-dim text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
