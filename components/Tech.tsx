"use client";

import { technologies } from "@/constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper, ToolTip } from ".";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import styles from "@/styles";

const Tech = () => {
  return (
    <SectionWrapper idName="">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I can do</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <ToolTip
            key={technology.name}
            tooltip={technology.name}
            position="top"
          >
            <div className="w-28 h-28">
              <BallCanvas path={technology.path} />
            </div>
          </ToolTip>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
