import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GradientButton from "../ui/GradientButton";
import AnimatedBlob from "../ui/AnimatedBlob";
import ScrollReveal from "../ui/ScrollReveal";
import { staggerContainer, fadeInUp, scaleIn } from "../animations/variants";
import { personalInfo } from "../data/personalInfo";

const contactLinks = [
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#2563eb",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "#0f766e",
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: personalInfo.linkedin,
    color: "#2563eb",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: personalInfo.github,
    color: "#0f766e",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper id="contact">
      <AnimatedBlob color="#2563eb" size={250} top="0%" right="-5%" delay={2} />

      <SectionHeading
        title="Get In Touch"
        subtitle="I'm actively exploring Associate Product Manager/Technical Product Manager roles. Whether you have an opportunity, want to collaborate, or just want to chat about product — I'd love to hear from you."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal direction="left">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-light-dim mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/8 rounded-lg px-4 py-3 text-light text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder-light-dim/40"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-light-dim mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-card border border-white/8 rounded-lg px-4 py-3 text-light text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder-light-dim/40"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm text-light-dim mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-dark-card border border-white/8 rounded-lg px-4 py-3 text-light text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder-light-dim/40 resize-none"
                placeholder="Tell me about the role or opportunity..."
              />
            </div>
            <GradientButton className="w-full justify-center">
              <HiMail className="text-lg" />
              Send Message
            </GradientButton>
          </form>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold font-heading text-light mb-3">
                Let&apos;s Connect
              </h3>
              <p className="text-light-dim text-sm leading-relaxed">
                I&apos;m actively looking for Associate Product Manager/Technical Product Manager roles where I can
                bring my unique blend of engineering experience and product management
                training. I&apos;m especially interested in SaaS, AI/ML products, and
                companies that value data-informed decision making and user-centric
                product development.
              </p>
              <p className="text-light-dim text-sm leading-relaxed mt-3">
                Open to full-time roles, contract opportunities, and conversations
                about product management, startup building, and technology.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeInUp}
                  href={link.href}
                  className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/3 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <link.icon className="text-lg" style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-light-dim">{link.label}</p>
                    <p className="text-sm text-light group-hover:text-primary-light transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="pt-2">
              <p className="text-xs text-light-dim uppercase tracking-widest mb-3">
                Professional Profiles
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-3"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={scaleIn}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                    style={{
                      background: `${link.color}10`,
                      border: `1px solid ${link.color}20`,
                    }}
                  >
                    <link.icon className="text-base" style={{ color: link.color }} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
