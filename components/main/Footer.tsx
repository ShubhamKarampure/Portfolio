import { FaLinkedin } from "react-icons/fa6";
import MagicButton from "../sub/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="flex text-white flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-300 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="https://www.linkedin.com/in/shubham-karampure" target="_blank" rel="noopener noreferrer">
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