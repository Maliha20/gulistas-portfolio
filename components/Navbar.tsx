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
                href="https://doc-08-8c-docs.googleusercontent.com/docs/securesc/0clmlr9vff4b7dh93ih4njjp281qqke7/efkercici8gdbtruudlc5fdcq66095lu/1688406750000/11124900691078271251/11124900691078271251/1PUb4ivf_r5zGbz9miwFrPo3hIheR6Niv?e=download&ax=AGtFMPVLOjM1iX18vgh0UNRRB5WS4s0f05REwvDEz-anq8Xi5IPxSWRm95XjiXCqhfK_5wVDPf_GVPYU4LRdqvIPupIF90EY_KxJG8etcxJSMIrfcb480dSFZ-HFmO-zoMXMjVT9gf77GdGcpavarKSI_IwS8JB_K_ZquPSj-b2i3_ty6i9JdMPp45H62N20HegRB5QXZMrmA3fLhBrX46rbKN5rUt2MVJIgJ0SdQCF9ubOaRP30yEnk3cHz9AQ96hthadu1moZ4sgv2Q-iUriTSSN1k-WM75FQWYav_EeszmOXDEQ7hNUcNkF5F0E1IGQRfOLaUnSxgfr3YEX34I_CYpJPFbHru5c4Nh2hXiWSPVLGCo_qNZ_F2pQ5n39cXiFTrN3ImEzw732Bqyt7qDcwEOGYkQOaWbPkEwL3Hu7qWisleVUTkj4oHNCt14bEKhyBxVv7oL6v5crLDMAH9AfhfoB7tMza_kRSIIbpeOGoDedX9bGee-0ftE-Jyg3Cr6Uc-4WGnlr1F8Fhmtc_IFhSbULsj8_SygbtFz0wwXVooCdMx-U9MRt1136g1-yiD3appxNETQXapiJS3DDcs6cP5khlgc1z050XlES5HSDz9Q9kKI7i_4xQqXisweG5rt9nf_QX4NoQuzC6tlwwqEEVqsSa_YYB6bFRtpca5IbsqD0oKACUhxLTrrUfuqQan_L-CBrEIk1Buvy2dBj6JaOBP8SoyWOmqbXI-7Sp1Q-UzvJazEcO4b0wH7kAcZy-ljpjkz-k5r_BRDnrF7FASUn2usG61Ip8_WSsalj6TLCdTccJ70yliWqlN_eJmuH1kObHB_rRGxS7S3LGIjdQgdRQrbyXCSD-eohoTiXJYMdSQUMa_0M-kLxzwRTMm4BOuZrtwUA&uuid=e2418766-19f2-4695-a24e-e1c6a79b472e&authuser=0&nonce=ss1vdsug0ha5k&user=11124900691078271251&hash=al2401j7g2p38kteoq2r599quud6kafb"
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
