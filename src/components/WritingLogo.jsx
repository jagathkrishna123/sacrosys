import { motion } from "framer-motion";

const WritingLogo = () => {
  const paths = [
    "M9.64 28.52C7.8 28.52 ...", // S
    "M25.5 18.1C ...", // A
    "M40.2 19.3C ...", // C
    // and so on for each letter
  ];

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 203 29"
      className="w-72 h-auto text-white"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            delay: i * 0.4, // makes each letter appear sequentially
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
};

export default WritingLogo;
