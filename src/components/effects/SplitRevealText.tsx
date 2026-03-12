import { motion } from "framer-motion";

interface SplitRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const SplitRevealText = ({ text, className = "", delay = 0 }: SplitRevealTextProps) => {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.06,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default SplitRevealText;
