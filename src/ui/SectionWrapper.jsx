const SectionWrapper = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
