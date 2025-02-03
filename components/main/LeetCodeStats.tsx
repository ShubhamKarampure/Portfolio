"use client";
import React from "react";
import { ContainerScroll } from "../sub/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
      
            
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
            <>
            
          </>
        }
        >
      
              <img 
      src="https://leetcard.jacoblin.cool/boringskates?&ext=heatmap&cache=0&theme=light" 
      alt="LeetCode Stats" 
      width={800} 
      height={1000} 
      
      />

      </ContainerScroll>
    </div>
    
  );
}
