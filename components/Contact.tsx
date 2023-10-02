"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import styles from "@/styles";
import { SectionWrapper } from ".";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useToast } from "./use-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (form.current) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_bwd4999",
          "template_nkd9z5a",
          form.current,
          "oP7eB9SkMkNR6IIJk"
        )
        .then(() =>
          toast({
            title: "Success",
            description:
              "Thank you. I will get back to you as soon as possible.",
          })
        )
        .catch((error) => {
          console.error(error);
          toast({
            title: "Failed",
            description:
              "Ahh, something went wrong. Please email me directly on 'sani@kaculoss.tech' and I will get back to you as soon as possible.",
            variant: "destructive",
          });
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                id="from_name"
                {...register("from_name", { required: true })}
                autoComplete="from_name"
                placeholder="John Doe"
                disabled={isLoading}
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium `}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                id="from_email"
                {...register("from_email", { required: true })}
                autoComplete="from_email"
                placeholder="johndoe@email.com"
                disabled={isLoading}
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium `}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                id="message"
                autoComplete="message"
                {...register("message", { required: true })}
                disabled={isLoading}
                placeholder="your message"
                className={`${
                  errors["from_name"] &&
                  "focus:ring-1 focus:ring-inset focus:ring-rose-500"
                } ${
                  isLoading && "cursor-default opacity-50"
                } bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium `}
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
