"use client";

import { motion } from "framer-motion";

interface SkillBoxProps {
  text: string;
  children: React.ReactNode;
  delay: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text, children, delay }) => {
  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "100px" }}
      whileInView={{ scale: 1, borderRadius: "45px" }}
      transition={{ ease: "easeInOut", duration: 1, delay }}
      className="h-40 w-40 bg-gradient-to-br from-accent/20 to-accent/60  rounded-xl text-light flex flex-col justify-center items-center text-2xl duration-500 hover:bg-accent"
    >
      <span className="text-5xl">{children}</span>
      <p className="text-center">{text}</p>
    </motion.div>
  );
};

export default SkillBox;
