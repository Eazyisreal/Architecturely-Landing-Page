import "../index.css";

import arrow from "../assets/images/arrow.svg";
import blarrow from "../assets/images/blarrow.svg";
import brarrow from "../assets/images/brarrow.svg";
import image from "../assets/images/image.webp";
import kim from "../assets/images/kim.webp";
import quote from "../assets/images/quote.webp";

export default function Testimonials() {
  return (
    <>
      <div className="bg-white pt-20 px-8 wrapper ">
        <div className="flex flex-col gap-20 max-md:flex-row ">
          <img
            loading="lazy"
            className="pb-8 max-md:w-1/2 max-lg:h-1/2"
            src={image}
            alt="An Image of a sky scrapper"
          />
          <div className="">
            <p className="font-onest max-lg:text-5xl  max-md:text-3xl max-lg:pt-8 max-md:leading-[1.3] max-lg:leading-[1.5] pb-8 font-semibold text-black  text-4xl">
              We design places that improve life and works by adding a strong
              sense of purpose and identity
            </p>

            <p className="text-[#424242]  pb-8 font-onest max-md:text-xl max-md:leading-[2] text-base font-normal leading-[2] ">
              Our team of experienced architects and designers are dedicated to
              providing tailored solutions that reflect your unique needs and
              preferences. Whether you're looking to build a new home, renovate
              an existing space, or create a commercial development, we have the
              skills, knowledge, and expertise to bring your vision to life.
            </p>

            <div className="flex  flex-row items-center w-40 bg-black p-2 gap-4">
              <a href="">
                <button className="font-onest items-center  font-medium flex gap-2 text-base tracking-widest leading-[140%] p-2 text-white uppercase ">
                  {" "}
                  See More <img loading="lazy" src={arrow} alt="Right Arrow" />{" "}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-20 flex flex-col max-md:flex-row gap-20 max-md:justify-between ">
          <h2 className="font-onest max-md:w1/2 max-md:text-7xl whitespace-nowrap text-[#050505] w-full font-semibold text-4xl leading-[1.3] ">
            Over 100+ <br /> people trust us
          </h2>

          <p className="font-onest max-md:text-xl max-md:leading-[2] text-[#424242] max-lg:ml-[10rem] max-md:pl-[3rem] max-lg:mr-[5rem] leading-[2]  text-base font-normal">
            we also place a strong emphasis on sustainability and environmental
            responsibility. Our team of experts incorporates sustainable design
            principles and practices into every project, ensuring that we
            minimize the environmental impact of our work while still delivering
          </p>
        </div>

        <div className="pt-20 flex">
          <div className=" flex  flex-col max-md:px-[8rem] max-lg:px-[20rem]">
            <img loading="lazy" className="w-1/12" src={quote} alt="Quotation Mark" />
            <h2 className="font-onset pt-8 text-black  max-md:text-5xl font-semibold text-4xl">
              Fast work and always delivers the best
            </h2>

            <p className="pt-8 font-onest max-md:text-2 max-md:leading-[2.2] xl max-lg:leading-[2] text-[#424242] text-xl leading-[2] ">
              I had the pleasure of working with Architecturely on a commercial
              development project and I couldn't be happier with the results.
              Their team was incredibly professional and attentive to our needs,
              and they delivered a design that exceeded our expectations.
            </p>
            <div className="pt-20 flex-col flex">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  className="max-md:w-1/12 w-2/12 "
                  src={kim}
                  alt="A man's Photo"
                />
                <div className="flex flex-col gap-2  ">
                  <h3 className="font-onest text-black text-xl font-semibold">
                    Kim Davids
                  </h3>
                  <p className="font-onest font-normal text-base text-[#424242]">
                    CEO of Maddy tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-20 flex w-full items-center justify-between">
          <img loading="lazy" className="" src={blarrow} alt="" />
          <div className="   w-full h-[1px] max-md:max-w-[80%]  max-w-[70%] bg-[#424242]"></div>
          <img loading="lazy" className="" src={brarrow} alt="" />
        </div>
      </div>
    </>
  );
}
