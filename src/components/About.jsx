import { motion } from "framer-motion";
import {
  HiBriefcase,
  HiAcademicCap,
  HiLightBulb,
  HiUserGroup,
  HiTrendingUp,
  HiChat,
} from "react-icons/hi";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import AnimatedBlob from "../ui/AnimatedBlob";
import ScrollReveal from "../ui/ScrollReveal";
import { staggerContainer, fadeInUp } from "../animations/variants";
import { personalInfo } from "../data/personalInfo";

const highlights = [
  {
    icon: HiBriefcase,
    value: "4+",
    label: "Years Experience",
    detail: "Engineering + PM",
    color: "#6366f1",
  },
  {
    icon: HiChat,
    value: "15+",
    label: "User Interviews",
    detail: "Across personas",
    color: "#06b6d4",
  },
  {
    icon: HiTrendingUp,
    value: "70%",
    label: "Engagement Lift",
    detail: "UX experiments",
    color: "#f59e0b",
  },
  {
    icon: HiUserGroup,
    value: "10K+",
    label: "Monthly Users",
    detail: "SaaS platform",
    color: "#6366f1",
  },
  {
    icon: HiAcademicCap,
    value: "PM",
    label: "Fellow",
    detail: "NextLeap trained",
    color: "#06b6d4",
  },
  {
    icon: HiLightBulb,
    value: "5+",
    label: "Product Cases",
    detail: "End-to-end ownership",
    color: "#f59e0b",
  },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="section-alt">
      <AnimatedBlob color="#6366f1" size={250} top="-5%" right="-5%" delay={1} />

      <SectionHeading
        title="About Me"
        subtitle="Product-minded engineer who understands both the code and the customer"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left - Photo + Main Content (3 cols) */}
        <div className="lg:col-span-3">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div className="shrink-0">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-accent">
                  <img
                    src="/linkedinprofile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full rounded-2xl object-cover border-4 border-dark"
                  />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-light mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-primary-light font-medium mb-2">
                  {personalInfo.subtitle}
                </p>
                <p className="text-light-dim text-sm leading-relaxed">
                  {personalInfo.aboutParagraph3}
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-light/80 text-base md:text-sm leading-relaxed">
                {personalInfo.tagline}
              </p>
              <p className="text-light-dim text-base leading-relaxed">
                {personalInfo.aboutParagraph2}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right - Stats Grid (2 cols) */}
        <div className="lg:col-span-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <motion.div key={item.label} variants={fadeInUp}>
                <GlassCard hoverColor={item.color} className="text-center py-5 h-full">
                  <item.icon
                    className="text-2xl mx-auto mb-2"
                    style={{ color: item.color }}
                  />
                  <div
                    className="text-2xl font-bold font-heading mb-0.5"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="font-semibold text-light text-sm">
                    {item.label}
                  </div>
                  <div className="text-light-dim text-xs mt-0.5">{item.detail}</div>
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
