import { motion } from "framer-motion";

export default function RakhiFinale() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      🎀 Virtual Rakhi Tied! Happy Raksha Bandhan! 🎀
    </motion.div>
  );
}