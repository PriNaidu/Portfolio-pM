import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-light-dim text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} M Priyanka Naidu
            </p>
            <p className="text-light-dim/50 text-[10px] sm:text-xs mt-1">
              Aspiring Product Manager | Product-minded Engineer
            </p>
          </div>

        </div>
      </div>

      {/* Back to top button - larger touch target on mobile */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-11 h-11 sm:w-10 sm:h-10 rounded-xl sm:rounded-lg flex items-center justify-center cursor-pointer z-40"
        style={{
          background: "rgba(15, 22, 41, 0.9)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(99, 102, 241, 0.25)",
          boxShadow: "0 4px 16px rgba(99, 102, 241, 0.15)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Back to top"
      >
        <HiArrowUp className="text-primary-light text-base sm:text-sm" />
      </motion.button>
    </footer>
  );
};

export default Footer;
