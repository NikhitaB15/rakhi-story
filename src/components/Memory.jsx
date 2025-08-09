import { motion } from "framer-motion";

export default function Memory({ text, animation, isActive, onClick }) {
  return (
    <motion.section
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.5 }}
      style={{ cursor: "pointer" }}
    >
      <p>{text}</p>
      {animation}
    </motion.section>
  );
}