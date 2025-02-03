import { FaLinkedin } from "react-icons/fa6";
import MagicButton from "../sub/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-16 lg:pt-20 lg:pb-10 relative" id="contact">
      <div className="flex text-white flex-col items-center relative z-10 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-[90vw] md:max-w-[70vw] lg:max-w-[45vw]">
          Ready to take <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-4 md:mt-6 lg:mt-10 mb-5 text-center max-w-[85vw] md:max-w-[60vw]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://www.linkedin.com/in/shubham-karampure" 
           target="_blank" 
           rel="noopener noreferrer"
           className="w-full flex justify-center">
          <MagicButton
            title="Connect on LinkedIn"
            icon={<FaLinkedin />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;