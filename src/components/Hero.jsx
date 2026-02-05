import { motion } from "framer-motion";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { personalInfo } from "../data/personalInfo";
import GradientButton from "../ui/GradientButton";
import AnimatedBlob from "../ui/AnimatedBlob";
import { staggerContainer, fadeInUp } from "../animations/variants";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-gradient"
    >
      <AnimatedBlob color="#2563eb" size={400} top="-10%" left="-5%" delay={0} />
      <AnimatedBlob color="#0f766e" size={350} bottom="10%" right="-5%" delay={2} />
      <AnimatedBlob color="#d97706" size={200} top="20%" right="10%" delay={4} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20"
      >
        {/* Profile Photo */}
        <motion.div variants={fadeInUp} className="mb-6">
          <div className="relative inline-block">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-[3px] bg-gradient-to-r from-primary via-secondary to-accent mx-auto">
              <img
                src="/profilephoto.png"
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover object-top border-4 border-dark"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-lg"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-primary-light text-sm md:text-base font-medium tracking-widest uppercase mb-4"
        >
          Associate Product Manager
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading gradient-text leading-tight mb-6"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-light-dim text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          {personalInfo.heroDescription}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-8">
          {["Product Discovery", "PRDs & User Stories", "RICE Prioritization", "UX Optimization", "AI/SaaS Products"].map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm bg-primary/10 text-primary-light border border-primary/20 rounded-full px-4 py-1.5 font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GradientButton onClick={scrollToContact}>
            <HiChatBubbleLeftRight className="text-lg" />
            Get in Touch
          </GradientButton>
          <GradientButton href={personalInfo.resumeUrl} variant="outline" download="M_Priyanka_Naidu_Resume.pdf">
            <HiDownload className="text-lg" />
            Download Resume
          </GradientButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiArrowDown className="text-light-dim/40 text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
