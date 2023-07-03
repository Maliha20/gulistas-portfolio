"use client";

import { FaStarOfLife } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ borderRadius: "1.5rem 1.5rem 0 0" }}
      whileInView={{ borderRadius: "0 0 0 0" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="section-padding bg-accent text-dark"
    >
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-center flex gap-5 justify-center items-center"
        >
          <span>Thank You</span>
        </motion.h2>
      </div>

      <div className="mt-10 flex justify-center items-center px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
          >
            Inspired by Benjamin Nespoulous, Constance Souville, Chiara Luzzana
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
