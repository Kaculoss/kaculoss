"use client";

import styles from "@/styles";
import { ComputersCanvas } from "./canvas";
import Link from "next/link";
import { motion } from "framer-motion";
import hero from "../assets/heroImage.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full z-10 md:z-0 -mb-[450px] lg:-mb-[500px] h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:items-start gap-0 lg:gap-8 `}
      >
        <div className="flex-[3] w-full flex flex-row lg:items-center items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] " />
            <div className="w-1 sm:h-80 h-40 violet-gradient " />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915eff] ">Sani</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2  text-white-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />{" "}
              interfaces, web applications <br className="sm:block hidden" />{" "}
              and graphic designs
            </p>
          </div>
        </div>

        <div className="flex-1 lg:flex-[2] flex items-center justify-center w-full h-[350px] lg:h-[450px] ">
          <Image
            src={hero}
            alt="Sani"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
