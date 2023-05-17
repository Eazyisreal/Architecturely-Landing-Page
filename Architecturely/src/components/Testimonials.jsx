import "../index.css";
import image from "../assets/images/image.svg";
import arrow from "../assets/images/arrow.svg";

export default function Testimonials() {
  return (
    <>
      <div className="bg-white p-20">
        <div className="flex flex-col gap-20 max-md:flex-row ">
          <img className="pb-8 max-md:w-1/2 max-lg:h-1/2" src={image} alt="An Image of a sky scrapper" />
          <div className="max-lg:p-[5.5rem] max-md:pt-[1rem]">
            <p className="font-onest max-lg:text-5xl  max-md:text-3xl max-lg:pt-8 max-lg:leading-[1.25] pb-8 font-semibold text-black  text-4xl">
              We design places that improve life and works by adding a strong
              sense of purpose and identity
            </p>

            <p className="text-[#424242]  pb-8 font-onest max-lg:text-xl max-lg:leading-[2.1] text-base font-normal leading-[2] ">
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
                  See More <img src={arrow} alt="Right Arrow" />{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
