import Marquee from "react-fast-marquee";
import SkillBox from "./SkillBox";
import SectionTitle from "./SectionTitle";
import { data } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="wrapper">
        <SectionTitle title="Skills" />
      </div>

      {/* SKILLS */}
      <div className="mt-20 wrapper flex gap-10 flex-wrap justify-center">
        {data.map((skill) => (
          <SkillBox key={skill.id} text={skill.text} delay={skill.delay}>
            {<skill.icon />}
          </SkillBox>
        ))}
      </div>

      {/* MARQUEE
      <div className="wrapper mt-20 bg-accent">
        <Marquee
          speed={100}
          className="text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-semibold overflow-hidden text-dark"
        >
          HTML&mdash;CSS&mdash;SASS&mdash;Bootstrap&mdash;Tailwind
          CSS&mdash;JavaScript&mdash;TypeScript&mdash;React.JS&mdash;Redux
          Toolkit&mdash;Next.JS&mdash;NextAuth&mdash;Firebase
          Auth.&mdash;Axios&mdash;React Query&mdash;GSAP&mdash;Framer
          Motion&mdash;Node.JS&mdash;Express.JS&mdash;MongoDB&mdash;PostgreSQl&mdash;Prisma&mdash;Mongoose&mdash;Stripe&mdash;Git&mdash;GitHub&mdash;NPM&mdash;Docker&mdash;Vercel&mdash;Netlify&mdash;Insomnia&mdash;Chrome
          DevTools&mdash;Figma&mdash;
        </Marquee>
      </div> */}
    </section>
  );
};

export default Skills;
