"use client";

import { ComputersCanvas } from "./canvas";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from ".";

const Hero3D = () => {
  return (
    <section className="relative   w-full h-screen mx-auto">
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero3D;
