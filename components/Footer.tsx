"use client";

import { logo } from "@/assets";
import { socials } from "@/constants";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.padding} py-8 max-w-7xl mx-auto relative z-0`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold text-base text-secondary tracking-wider">
            <span className="font-medium text-lg text-white ">Email : </span>
            sani@kaculoss.tech
          </h4>
          <h4 className="font-bold text-base text-secondary tracking-wider">
            <span className="font-medium text-lg text-white ">Address : </span>
            Accra, Ghana
          </h4>
          <h4 className="font-bold text-base text-secondary tracking-wider">
            <span className="font-medium text-lg text-white ">Phone : </span>
            +233 549 85 3041
          </h4>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between flex-wrap gap-4 ">
            <Image src={logo} alt="logo" className="w-44 h-16 object-contain" />

            <p className="font-normal text-[14px] text-white opacity-50 ">
              Copyright @ 2021 - 2023 Kaculoss. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link href={social.link} target="_blank" key={social.name}>
                  <Image
                    src={social.imgUrl}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
