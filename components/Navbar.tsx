"use client";

import Link from "next/link";
import ButtonAsLink from "./ButtonAsLink";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa";
import { useCallback, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }, [isMobileNavOpen]);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="h-24 flex justify-between items-center uppercase border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100]"
      >
        <div className="wrapper flex justify-between items-center">
          <div className="left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
              className="logo flex items-center gap-2"
            >
              <span className="text-2xl font-bold text-accent animate-pulse">
                Gulista
              </span>
              <Link href="#" className="linear-flow">
                Binte Marium
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="mid py-4 px-10 rounded-full bg-black/10 backdrop-blur-xl hover:px-20 duration-500 shadow-light-xl"
          >
            <nav className="flex gap-5">
              <li className="list-none">
                <Link href="#home" className="linear-flow">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link href="#about" className="linear-flow">
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link href="#projects" className="linear-flow">
                  Projects
                </Link>
              </li>
              <li className="list-none">
                <Link href="#skills" className="linear-flow">
                  Skills
                </Link>
              </li>
              <li className="list-none">
                <Link href="#contact" className="linear-flow">
                  Contact
                </Link>
              </li>
            </nav>
          </motion.div>

          <div className="right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.9 }}
            >
              <ButtonAsLink
                href="https://doc-08-8c-docs.googleusercontent.com/docs/securesc/0clmlr9vff4b7dh93ih4njjp281qqke7/olg7lr8jd664teote5pnoc7crpfqs7fv/1687882950000/11124900691078271251/11124900691078271251/1PUb4ivf_r5zGbz9miwFrPo3hIheR6Niv?e=download&ax=ADWCPKBO0V-pvLVbTSdCv0xWQ2v9r6y_4ZrchH-WWMwInoX1a_8hmj3C5BWVAvwp2heRrh0IBwR2BJK0DpA4MZkXZ_Co3gLgknyvM080p8lc7WPs5yCzOx7BunneAr2DYOzWwcHaYV60AZauieQhyrWeDw0uivJFYybpHVFEQb2bfcDP3PcZTCFTd7ZyKKl_r6sUfiZlsfppgceWzM4vl_tZX7a45ajrAPyqVlxCPbS2j2ku99ZWFNtplZ6P-CLsyugqmLZiybdD-wzsIRvmsnlcDRhRbD5TcJHzApaBikeBnDEb-mxostzY168xJ--4fFdaMjIOBf3uFnG9LnjtNxcXlGJeLgIfk8UJ-2Y2PnIVjiFjge7AvjF9jZQe99mMThOKc5sfXc-XTpnJqNubwPNfOQ5qVLs4OzW-70AB1ydNBF4GygwyOxcgVXd5JQNMq8ImtoKWmnZsKJZyEWFzuGZqWBSaxLzq7M6mWr73vTqRIoLq8YAoGUkExPVViRW3jOCoAGkOdsiG7p9xW0B5pDbrjfVEqGZxPuT2_o27BraTBe9UFgJGHXo8yo4mAIpO-15oxidUSkE_vewpBb2yfpL7J17fsgFmMBfSlcPvYAen_69jjNaym1bDSAIwW9-I6SmeGDHNigAWIx0vfalRBpMNINWT-Pepto-9ZQKPfsweg-Yj6IdJxIkqh19_W7_FSdcPiWh0aoCEUYEX2a4dXESYWJDOviDY5YnzvpVEV-actR7Z6_A-xQ5k80YRFpMJB5zWQSfsBGUvRWlDSyJy5ObLzws_02IQVZ8cL3YVbOK3iEjTPMvjP9kkDOp54rzTR3DKIFMvKu6SIsDyFEAy3K9iUXvWHIi0j2YL-MIxMw-Gr5nSIAVZz0qXvfNi_eR30bkeJA&uuid=055e3225-6173-4f20-beae-dd3fa7d59389&authuser=0&nonce=ukfs4419b6dk0&user=11124900691078271251&hash=94kjnc085th2puihijd241mtrhmolc6r"
                placeholder="Download Resume"
                target="_blank"
              />
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE NAVIGATION */}
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
        className="md:hidden flex h-24 justify-between items-center border-b border-light/10 bg-black/60 backdrop-blur-xl shadow-xl fixed top-0 left-0 right-0 z-[100]"
      >
        {/* INNER HEADER */}
        <div className="wrapper flex justify-between items-center">
          {/* LOGO */}
          <div onClick={handleClick} className="left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5, delay: 0.7 }}
              className="logo flex items-center gap-2"
            >
              <span className="text-2xl text-accent animate-pulse">
                Gulista
              </span>
              <Link href="/" className="linear-flow">
                Binte Marium
              </Link>
            </motion.div>
          </div>
          {/* TOGGLE BUTTON */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
              onClick={handleClick}
              className="right flex flex-col gap-2 cursor-pointer"
            >
              <span
                className={clsx(
                  "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                  isMobileNavOpen ? "rotate-[45deg]" : "rotate-[0deg]"
                )}
              ></span>
              <span
                className={clsx(
                  "bg-light w-4 h-[2px] rounded-full duration-500",
                  isMobileNavOpen ? "translate-x-[100vw]" : "translate-x-0"
                )}
              ></span>
              <span
                className={clsx(
                  "bg-light w-7 h-[2px] rounded-full origin-left duration-500",
                  isMobileNavOpen ? "rotate-[-45deg]" : "rotate-[0deg]"
                )}
              ></span>
            </motion.div>
          </div>
        </div>
      </motion.header>
     
      <div
        onClick={handleClick}
        className={clsx(
          "fixed bg-accent top-0 left-0 right-0 bottom-0 h-screen w-screen z-[98] duration-700",
          isMobileNavOpen
            ? "translate-y-0 rounded-bl-[0px]"
            : "translate-y-[-100vh] rounded-bl-full"
        )}
      >
        <div
          className={clsx(
            "fixed bg-dark top-0 left-0 right-0 bottom-0 h-screen w-screen z-[99] duration-1000 flex justify-center items-center"
          )}
        >
          <nav className="flex flex-col gap-5 text-4xl">
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.1 }}
                className="list-none"
              >
                <Link href="/" className="hover:text-accent duration-500">
                  Home
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.2 }}
                className="list-none"
              >
                <Link href="/#about" className="hover:text-accent duration-500">
                  About
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.3 }}
                className="list-none"
              >
                <Link
                  href="/#projects"
                  className="hover:text-accent duration-500"
                >
                  Projects
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.4 }}
                className="list-none"
              >
                <Link
                  href="/#skills"
                  className="hover:text-accent duration-500"
                >
                  Skills
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.5 }}
                className="list-none"
              >
                <Link
                  href="/#contact"
                  className="hover:text-accent duration-500"
                >
                  Contact
                </Link>
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.65, delay: 0.6 }}
                className="list-none"
              >
                <Link
                  href="https://drive.google.com/uc?export=download&id=16rCIrOJxWv-FYk1ydZwsU84d6fWoJ3bw"
                  target="_blank"
                  className="hover:text-accent duration-500"
                >
                  Resume
                </Link>
              </motion.li>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
