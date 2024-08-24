import { styles } from "../styles";
import bgimg from "../assets/bgimg.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto mt-28 lg:mt-0`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-24">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#2feca6]">Vishakh Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop <br className="sm:block hidden" />
            user interfaces and web applications
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center -z-10 ">
        <img src={bgimg} className=" opacity-15 rounded"></img>
      </div>
      <div className="fixed bottom-3 right-0 z-50">
        <div className="  flex flex-col mr-2  text-xl ">
          <ul className="space-y-3">
            <li>
              <a
                className=" flex flex-row text-white cursor-pointer hover:scale-110 "
                href="https://www.instagram.com/itz__vishu_18/"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className=" flex flex-row text-white cursor-pointer hover:scale-110"
                href="https://x.com/Vishakhsharma3"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/vishakh-sharma-537973230/"
                target="_blank"
                className=" flex flex-row text-white hover:cursor-pointer hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/917807371756?text=Hi"
                target="_blank"
                className=" flex flex-row text-white cursor-pointer hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
