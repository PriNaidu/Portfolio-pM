import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiMail, HiPhone, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaInstagram, FaThreads } from "react-icons/fa6";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GradientButton from "../ui/GradientButton";
import AnimatedBlob from "../ui/AnimatedBlob";
import ScrollReveal from "../ui/ScrollReveal";
import { staggerContainer, fadeInUp, scaleIn } from "../animations/variants";
import { personalInfo } from "../data/personalInfo";

// EmailJS configuration — replace these with your actual IDs from https://emailjs.com
const EMAILJS_SERVICE_ID = "service_0mpzrct";
const EMAILJS_TEMPLATE_ID = "template_cra43tc";
const EMAILJS_PUBLIC_KEY = "91MtajfE2WV4iuQA1";

const contactLinks = [
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#6366f1",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "#06b6d4",
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: personalInfo.linkedin,
    color: "#6366f1",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: personalInfo.github,
    color: "#06b6d4",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: personalInfo.instagram,
    color: "#e1306c",
  },
  {
    icon: FaThreads,
    label: "Threads",
    href: personalInfo.threads,
    color: "#ffffff",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Smaller blob on mobile, hidden on very small screens */}
      <div className="hidden sm:block">
        <AnimatedBlob color="#6366f1" size={250} top="0%" right="-5%" delay={2} />
      </div>

      <SectionHeading
        title="Get In Touch"
        subtitle="I'm actively exploring Associate Product Manager/Technical Product Manager roles. Whether you have an opportunity, want to collaborate, or just want to chat about product — I'd love to hear from you."
      />

      {/* Reversed order on mobile: contact info first, then form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Info - Shows first on mobile */}
        <ScrollReveal direction="up" className="order-1 md:order-2">
          <div className="space-y-5 md:space-y-6">
            <div>
              <h3 className="text-base md:text-lg font-semibold font-heading text-light mb-2 md:mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-light-dim text-sm leading-relaxed">
                I&apos;m actively looking for Associate Product Manager/Technical Product Manager roles where I can
                bring my unique blend of engineering experience and product management
                training. I&apos;m especially interested in SaaS, AI/ML products, and
                companies that value data-informed decision making and user-centric
                product development.
              </p>
              <p className="text-light-dim text-sm leading-relaxed mt-2 md:mt-3">
                Open to full-time roles, contract opportunities, and conversations
                about product management, startup building, and technology.
              </p>
            </div>

            {/* Contact links - larger touch targets on mobile */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2 sm:space-y-3"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeInUp}
                  href={link.href}
                  className="flex items-center gap-3 sm:gap-4 group p-3 sm:p-3 rounded-xl sm:rounded-lg bg-white/2 sm:bg-transparent hover:bg-white/5 active:bg-white/8 transition-colors"
                >
                  <div
                    className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl sm:rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <link.icon className="text-xl sm:text-lg" style={{ color: link.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-light-dim">{link.label}</p>
                    <p className="text-sm text-light group-hover:text-primary-light transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social links - larger touch targets */}
            <div className="pt-1 sm:pt-2">
              <p className="text-xs text-light-dim uppercase tracking-widest mb-3">
                Social Profiles
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-2 sm:gap-3 flex-wrap"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={scaleIn}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 sm:w-11 sm:h-11 rounded-xl sm:rounded-lg flex items-center justify-center transition-all active:scale-95 hover:scale-105"
                    style={{
                      background: `${link.color}10`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <link.icon className="text-lg sm:text-base" style={{ color: link.color }} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form - Shows second on mobile */}
        <ScrollReveal direction="up" className="order-2 md:order-1">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm text-light-dim mb-1.5 sm:mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/8 rounded-xl sm:rounded-lg px-4 py-3.5 sm:py-3 text-light text-base sm:text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder-light-dim/40"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-light-dim mb-1.5 sm:mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/8 rounded-xl sm:rounded-lg px-4 py-3.5 sm:py-3 text-light text-base sm:text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder-light-dim/40"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-light-dim mb-1.5 sm:mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-dark-card border border-white/8 rounded-xl sm:rounded-lg px-4 py-3.5 sm:py-3 text-light text-base sm:text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all placeholder-light-dim/40 resize-none"
                placeholder="Tell me about the role or opportunity..."
              />
            </div>
            <GradientButton
              className="w-full justify-center py-3.5 sm:py-3 text-base sm:text-sm"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <HiMail className="text-lg" />
                  Send Message
                </>
              )}
            </GradientButton>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start sm:items-center gap-2 text-green-400 text-sm mt-3 p-3 bg-green-500/10 rounded-lg"
                >
                  <HiCheckCircle className="text-lg shrink-0 mt-0.5 sm:mt-0" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start sm:items-center gap-2 text-red-400 text-sm mt-3 p-3 bg-red-500/10 rounded-lg"
                >
                  <HiExclamationCircle className="text-lg shrink-0 mt-0.5 sm:mt-0" />
                  <span>Failed to send. Please try again or email me directly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
