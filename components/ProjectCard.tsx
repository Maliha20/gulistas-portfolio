"use client";
import Image from "next/image";
import ButtonAsLink from "./ButtonAsLink";
import {motion} from "framer-motion"

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string;
  live: string;
  front: string;
  back: string;
  full: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tech,
  live,
  front,
  back,
  full,
}) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "-100%", borderRadius: "200px" }}
        whileInView={{ y: 0, borderRadius: "30px" }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="card overflow-hidden w-full h-[52rem] bg-black/40 rounded-[30px] shadow-xl border border-light/10"
      >
        <div className="card-image overflow-hidden w-full h-[20rem]">
          <Image
            src={image}
            alt={title}
            width="500"
            height="500"
            priority
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-10">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              className="uppercase text-4xl font-semibold"
            >
              {title}
            </motion.h3>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
              className="mt-3 text-light/60"
            >
              {description}
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
              className="text-accent uppercase mt-3"
            >
              {tech}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2.5, delay: 1.4 }}
            className="mt-5 uppercase flex gap-5"
          >
            <ButtonAsLink href={live} target="_blank" placeholder="Live Site" />
            {front && (
              <ButtonAsLink
                href={front}
                target="_blank"
                placeholder="Frontend"
              />
            )}
            {back && (
              <ButtonAsLink href={back} target="_blank" placeholder="Backend" />
            )}
            {full && (
              <ButtonAsLink href={full} target="_blank" placeholder="Backend" />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;