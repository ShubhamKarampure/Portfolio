import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 p-10">
        <div className="flex-1">
          <ProjectCard
            src="/learnify.png"
            title="Learnify"
            description="LearniFy is an Hackathon winning AI-powered learning platform built using MERN Stack that enhances education through assessments, gamification, and inclusivity, offering an engaging experience for students and teachers."
            githubLink="https://github.com/Git1Gud/LearniFy"
          />
        </div>
        <div className="flex-1">
          <ProjectCard
            src="/shikshasangam.jpg"
            title="ShikshaSangam"
            description="Cross-platform app for student-college alumni interaction built on React, Django and React Native for the Technical Education Department of Rajasthan"
          githubLink="https://github.com/ShubhamKarampure/ShikshaSangam"
          />
        </div>
        
        <div className="flex-1">
          <ProjectCard
            src="/algograph.png"
            title="Algograph DSA learning platform"
            description="Algograph built using Next.js is a hackathon winning website which helps student learn DSA using visualization, quizes and one-platform coding sheets."
          githubLink="https://github.com/ShubhamKarampure/Algograph"
          />
        </div>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="flex-1">
          <ProjectCard
            src="/signlingo.png"
            title="Sign Language Learning Platform"
            description="Streamlit-based web app for teaching sign language through real-time hand gesture recognition"
         githubLink="https://github.com/ShubhamKarampure/asl-streamlit-signlingo"
          />
        </div>
        <div className="flex-1">
          <ProjectCard
            src="/fit-track.png"
            title="Fit-Track"
            description="Build using MERN stack fittrack allows users to log workouts, meals, track progress, and receive personalized health tips to help achieve their fitness goals."
          githubLink="https://github.com/ShubhamKarampure/FitTrack"
          />
        </div>
        <div className="flex-1">
          <ProjectCard
            src="/pacman.png"
            title="Classic Pacman Arcade"
            description="This was the first project I built using python pybag library. I used various dsa concepts to build it from scratch"
          githubLink="https://github.com/ShubhamKarampure/pacman_game"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Projects;
