"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { AIPlaceholder } from "../main/ai-placeholder";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 lg:px-20 mt-16 sm:mt-20 md:mt-20 w-full z-[20] md:gap-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start mb-10 md:mb-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] self-center md:self-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 inline-block" />
          <h1 className="Welcome-text text-[13px] inline-block">
            Fullstack Developer | Gen AI Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-full md:max-w-[600px] text-center md:text-start"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              GEN-AI{" "}
            </span>
            fullstack website
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 max-w-full md:max-w-[600px] text-center md:text-start mx-auto md:mx-0"
        >
          I&apos;m a developer with experience in building Fullstack Website & Generative-AI 
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="p-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] self-center md:self-start"
          href="https://github.com/ShubhamKarampure"
          target="_blank" 
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] h-full flex justify-center items-center"
      >
        <div className="flex justify-center border border-hidden rounded-3xl p-4 w-full h-[300px] sm:h-[400px] md:h-[500px] text-center">
          <AIPlaceholder />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
