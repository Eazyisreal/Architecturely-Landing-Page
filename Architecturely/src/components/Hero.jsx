import "../index.css";

import Header from "./Header";
import heroImage from "../assets/images/hero-image.svg";
import line from "../assets/images/line.svg";

export default function Hero() {
  return (
    <>
      <div
        className=" bg-background bg-cover bg-center bg-blend-darken bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header />

        <div className="p-[4rem] wrapper flex flex-col gap-2 max-sm:gap-10 max-lg:gap-72 max-md:flex-col max-lg:flex-row ">
          <p className=" mt-[12rem] mb-[3rem] text-white  text-[2.3rem] max-md:mt-[15rem]  max-md:text-[6.25rem]  max-md:leading-[100%]  font-normal max-xl:leading-[110%] h-full font-onset max-xl:text-[6.25rem] ">
            We are a fine <br /> architecture firm <br /> in New York
          </p>

          <div className=" flex-col flex w-[50%]  max-xl:flex  h-4 mb-[4rem] max-lg:mb-0 max-sm:w-[30%] max-lg:mt-[30.5rem] ">
            <p className="font-onset text-xl uppercase text-white whitespace-nowrap  font-medium leading-[140%] tracking-widest">Get in Touch</p>
            <img  loading="lazy"src={line} />
          </div>
        </div>
      </div>
    </>
  );
}
