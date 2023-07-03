"use client";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import ButtonAsLink from "./ButtonAsLink";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="wrapper section-padding">
      <SectionTitle title="About Me" />

      <div className="mt-20 grid xl:grid-cols-5 items-center gap-20">
        <motion.div
          initial={{ scale: 0, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: "1rem" }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="lg:col-span-2 w-full h-[40rem] "
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0, borderRadius: "0px" }}
            whileInView={{ scale: 1, borderRadius: "0px" }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="w-full h-[40rem] overflow-hidden rounded-2xl group relative shadow-xl"
          >
            {/* OVERLAY */}
            {/* BACKGROUND OVERLAY */}
            <div className="absolute right-25 top-24 w-[40rem] h-[20rem] z-[-1] rounded-full radial blur-3xl"></div>
            <div className="absolute z-[1] top-0 left-0 right-0 bottom-0   border-8 border-accent  w-[80%] h-[90%] group-hover:opacity-0 duration-[4000ms]"></div>

            <div>
              <div className="absolute z-[1] top-0 left-0 right-0 bottom-0  w-full h-full group-hover:opacity-0 duration-[4000ms]"></div>
              <Image
                width={500}
                height={500}
                priority
                className="absolute left-16 top-12 z-[1] w-full h-full object-cover group-hover:scale-125 duration-[4000ms]"
                src="https://res.cloudinary.com/da6uz7qsv/image/upload/v1688307132/mali_mtdfbl.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENTS */}
        <div className="lg:col-span-3 text-4xl overflow-hidden">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="leading-[1.2]"
          >
            Hi there, I am Gulista Binte Marium, an aspiring web developer
            specializing in MERN stack. My journey as a developer began with a
            strong affinity towards JavaScript, HTML, and CSS. Over the months,
            I have honed my skills and specialized in the MERN stack – MongoDB,
            Express.js, React.js, and Node.js – which has become my area of
            expertise.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
