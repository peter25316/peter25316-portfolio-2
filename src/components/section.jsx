import { motion } from "framer-motion";

const Section = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
