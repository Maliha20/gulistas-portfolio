"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ButtonAsLink from "./ButtonAsLink";
import { BiLogoJavascript, BiLogoLinkedin, BiLogoReact } from "react-icons/bi";

import { AiFillGithub } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import Image from "next/image";
import image from '../public/351404853_645115697483656_8324874641414573458_n.jpg'
import { SiExpress, SiNextdotjs, SiNodedotjs, SiRedux } from "react-icons/si";
const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-6rem)] relative">
      {/* HEADER*/}
     
     <div className="overflow-hidden flex justify-between gap-8">
    
      <div className="text-[8rem] leading-[1] font-semibold">
        {/* FIRST LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            Full Stack
          </motion.h2>
        </div>
        {/* SECOND LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          >
             Developer 
          </motion.h2>
        </div>
        
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
          >
            specializing
          </motion.h2>
        </div>
        {/* FOURTH LINE */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.9 }}
          >
             in MERN stack<span className="text-accent">.</span>
          </motion.h2>
        </div>
      </div>
     </div>
   

      {/* DESCRIPTIONS */}
     
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ ease: "easeInOut", duration: 1.5, delay: 1.9 }}
        className="mt-6 border-light/30"
      />
       {/* BACKGROUND OVERLAY */}
       <div className="hidden xl:block absolute right-36 top-24 w-[20rem] h-[20rem] z-[-1] rounded-full radial blur-3xl"></div>

        {/* SKILL CARDS */}
        <div className="hidden xl:block absolute right-0 top-0 w-[40rem] h-[30rem] z-[1]">
        <motion.div
          initial={{ opacity: 0, top: "40%" }}
          whileInView={{ opacity: 1, top: "50%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          className="w-[10rem] h-[13rem] rounded-2xl border border-light/10 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-sky-400"
        >
          <span>
            <BiLogoReact />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, left: "25%" }}
          whileInView={{ opacity: 1, left: "35%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
          className="w-[8rem] h-[10rem] rounded-2xl border border-light/10 absolute left-[35%] top-[25%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-8xl flex justify-center items-center text-yellow-400"
        >
          <span>
            <BiLogoJavascript />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, top: "90%" }}
          whileInView={{ opacity: 1, top: "80%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.3 }}
          className="w-[12rem] h-[10rem] rounded-2xl border border-light/10 absolute left-[65%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-lime-400"
        >
          <span>
            <SiNodedotjs />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, left: "95%" }}
          whileInView={{ opacity: 1, left: "85%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
          className="w-[10rem] h-[10rem] rounded-2xl border border-light/10 absolute left-[85%] top-[60%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-7xl flex justify-center items-center text-violet-400"
        >
          <span>
            <SiRedux />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, left: "12%" }}
          whileInView={{ opacity: 1, left: "22%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.7 }}
          className="w-[8rem] h-[8rem] rounded-2xl border border-light/10 absolute left-[22%] top-[48%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-6xl flex justify-center items-center text-light"
        >
          <span>
            <SiNextdotjs />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, left: "75%" }}
          whileInView={{ opacity: 1, left: "65%" }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1.9 }}
          className="w-[8rem] h-[8rem] rounded-2xl border border-light/10 absolute left-[65%] top-[25%] -translate-x-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl shadow-2xl text-6xl flex justify-center items-center text-light"
        >
          <span>
            <SiExpress />
          </span>
        </motion.div>
      </div>

      {/* LOWER CONTENTS */}
      <div className="flex justify-between mt-5 overflow-hidden">
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.7 }}
        >
          <p>Lets Connect</p>
          <div className="mt-3 flex justify-center gap-5">
            <Link
              href="https://github.com/Maliha20"
              target="_blank"
              className="text-3xl hover:text-accent duration-500"
            >
              <span>
                <AiFillGithub />
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gulista-marium-7209b9235/"
              target="_blank"
              className="text-3xl hover:text-accent duration-500"
            >
              <span>
                <BiLogoLinkedin />
              </span>
            </Link>
       
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 2.9 }}
          className="flex gap-5 items-center"
        >
          <p>Scroll Down</p>
          <Link
            href="/#about"
            className="h-14 w-14 bg-accent rounded-full flex justify-center items-center text-3xl hover:bg-light hover:text-dark duration-500"
          >
            <span className="animate-bounce">
              <BsArrowDown />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
