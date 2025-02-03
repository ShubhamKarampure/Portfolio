"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { HeroScrollDemo } from "./LeetCodeStats";

const LeetCodeBadge = () => {
  return (
    <img 
      src="https://leetcard.jacoblin.cool/boringskates?&ext=heatmap&cache=0&theme=transparent" 
      alt="LeetCode Stats" 
      width={800} 
      height={1000} 
       className="filter brightness-150 contrast-125"
    />
  );
};


const ProblemSolving = () => {
  
  return (
    <section
      id="dsa"
    >
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-aut0 top-0 z-[5]">
  <motion.div
    variants={slideInFromTop}
    className="text-[40px]  font-semibold text-center text-gray-200"
    >
    Passionate about
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
      {" "}
      Problem{" "}
    </span>
    Solving
  </motion.div>
</div>

   
      <HeroScrollDemo/>
    </div>
    </section>
  );
};

export default ProblemSolving;