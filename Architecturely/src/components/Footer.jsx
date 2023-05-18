import "../index.css";
import brarrow from "../assets/images/brarrow.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <>
      <section className="bg-black wrapper pt-20 px-8 ">
        <div className="flex flex-col  max-md:justify-between max-md:flex-row">
          <p className="font-onest text-white text-4xl max-md:text-5xl max-lg:text-6xl  max-lg:leading-[1.6] max-md:leading-[1.5] leading-[2] ">
            Want to build your <br /> dream home?
          </p>

          <div className="flex flex-col pt-20 pb-20 ">
            <div className="flex pr-12 max-md:pr-8 justify-between">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address...."
                className=" bg-black  font-onest text-light max-md:text-2xl max-lg:text-3xl text-[#A5A5A5] text-xl"
              />
              <a href="">
                <button className="font-onest items-center bg-white  font-medium flex gap-2 text-base tracking-widest leading-[140%] p-2 text-white uppercase ">
                  {" "}
                  <img
                    className="w-[2rem] h-[1.4rem]"
                    src={brarrow}
                    alt="Right Arrow"
                  />{" "}
                </button>
              </a>
            </div>
            <div className=" w-full h-[2px] mt-1  max-w-[91%] bg-[#A5A5A5]"></div>
          </div>
        </div>

        <div className="flex flex-col max-md:flex-row max-md:justify-between max-md:px-6">
          <div className="pb-[3.2rem]">
            <ul className="flex flex-col max-md:flex-row items-start gap-[3.2rem] ">
              <li className="font-onest text-[#A5A5A5] text-center  max-md:text-xl text-base">
                Term & conditions
              </li>
              <li className="font-onest text-[#A5A5A5] text-center max-md:text-xl text-base">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="pb-20 ">
            <ul className="flex flex-col max-md:flex-row items-start gap-[3.2rem] ">
              <li className="font-onest text-[#A5A5A5] text-center max-md:text-xl text-base">
                Contact Us
              </li>
              <li className="font-onest text-[#A5A5A5] text-center max-md:text-xl text-base">
                License{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full h-[.2px]  bg-[#A5A5A5]"></div>

        <div className=" flex gap-12 py-20  justify-center ">
          <div className="w-[25px] h-[25px]  max-md:w-[40px] max-md:h-[40px] items-center border-2  rounded-[50%]  border-solid border-[#151515]">
            <img
              className="w-full h-full object-cover"
              src={facebook}
              alt="facebook logo"
            />
          </div>
          <div className="w-[25px] h-[25px]  max-md:w-[40px] max-md:h-[40px] border-2  rounded-[50%]  border-solid border-[#151515]">
            <img
              className="w-full h-full object-cover"
              src={twitter}
              alt="twitter logo"
            />
          </div>
          <div className="w-[25px] h-[25px]  max-md:w-[40px] max-md:h-[40px] border-2  rounded-[50%]  border-solid border-[#151515]">
            <img
              className="w-full h-full object-cover"
              src={linkedin}
              alt="linkedin logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
