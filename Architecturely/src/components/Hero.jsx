import "../index.css";

import Header from "./Header";
import heroImage from "../assets/images/hero-image.svg";
import line from "../assets/images/line.svg";


export default function Hero() {
  return (
    <>
      <div
        className=" bg-background bg-cover bg-center bg-blend-darken bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header />

        <div className="p-[5rem] flex flex-col gap-2 max-sm:gap-20 max-lg:gap-72 max-md:flex-col max-lg:flex-row ">
          <p className=" my-[17.5rem] mb-[2rem] text-[2.5rem] max-md:my-[20rem]  max-md:text-[6.25rem]  max-md:leading-[100%] max-md:mb-3 font-normal max-xl:leading-[110%] font-onset max-xl:text-[6.25rem] ">
            We are a fine <br /> architecture firm <br /> in New York
          </p>

          <div className=" flex-col flex  max-xl:flex  h-8  max-sm:w-[30%] max-lg:my-[35rem] ">
            <p className="font-onset text-xl uppercase  font-medium leading-[140%] tracking-widest">Get in Touch</p>
            <img src={line} />
          </div>
        </div>
      </div>
    </>
  );
}
