import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <p className="text-light-dim text-sm">
              &copy; {new Date().getFullYear()} M Priyanka Naidu
            </p>
            <p className="text-light-dim/50 text-xs mt-1">
              Aspiring Product Manager | Product-minded Engineer
            </p>
          </div>
       
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer z-40"
        style={{
          background: "rgba(17, 24, 39, 0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Back to top"
      >
        <HiArrowUp className="text-primary-light text-sm" />
      </motion.button>
    </footer>
  );
};

export default Footer;
