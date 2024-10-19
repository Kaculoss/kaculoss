/* eslint-disable react/no-unescaped-entities */
"use client";

import { counters, services } from "@/constants";

import styles from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";
import { SectionWrapper } from ".";
import AnimateCounter from "./AnimateCounter";
import Link from "next/link";

interface IProps {
  index: number;
  icon: StaticImageData;
  title: string;
  desc: string;
}

const ServiceCard = ({ index, icon, title, desc }: IProps) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-xs text-center">{desc}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <SectionWrapper idName="about">
      <div className="flex w-full gap-5 justify-between items-center">
        <div className="w-full flex-1 lg:flex-[3]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in technologies and frameworks like Vue,
            React, Next.js, Graphql, PostgreSQL, SQL, Node.js, Three.js and
            Adobe Photoshop. I'm a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let's work together to bring your
            ideas to life!
          </motion.p>
          <div className="mt-4">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1kHov2oV57eFUcwsj20KAF2OH2tiO5oBq/view?usp=sharing"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              My Resume
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-[1] flex-col gap-8 items-center justify-center w-full">
          {counters.map((counter) => (
            <AnimateCounter key={counter.desc} {...counter} />
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="flex lg:hidden gap-4 items-center justify-center w-full mt-8">
        {counters.map((counter) => (
          <AnimateCounter key={counter.desc} {...counter} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
