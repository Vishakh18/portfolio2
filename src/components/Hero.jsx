import { styles } from "../styles";
import bgimg from "../assets/bgimg.jpeg";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-16">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#2feca6]">Vishakh Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop <br className="sm:block hidden" />
            user interfaces and web applications
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src={bgimg} className=" opacity-15 rounded"></img>
      </div>
    </section>
  );
};

export default Hero;
