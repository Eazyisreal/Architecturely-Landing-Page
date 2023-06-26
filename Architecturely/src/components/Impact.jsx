import "../index.css";

import arrow from "../assets/images/arrow.svg";

export default function Impact() {
  return (
    <>
      <section className="bg-white wrapper pt-20 px-8 ">
        <div>
          <div className="max-md:pl-[3.5rem]">
            <h2 className=" text-black pb-12 font-bold text-4xl max-md:text-[3.5rem]  max-md:leading-[1.3] leading-[1.3] font-onest ">
              Our impact <br /> in numbers
            </h2>

            <div className="flex  flex-row items-center w-40 bg-black p-2 gap-4">
              <a href="">
                <button className="font-onest items-center  font-medium flex gap-2 text-base tracking-widest leading-[140%] p-2 text-white uppercase ">
                  {" "}
                  See More <img loading="lazy" src={arrow} alt="Right Arrow" />{" "}
                </button>
              </a>
            </div>
          </div>

          <div className="pr-8 pt-12 max-md:flex max-md:flex-col max-md:items-end max-md:w-full max-md:pr-[8rem] ">
            <div className="flex flex-row pb-20 max-md:w-3/4 justify-between">
              <div className=" flex flex-col items-start gap-[6.85px]">
                <h2 className="font-onset text-black font-normal text-5xl max-md:text-[5.75rem] ">
                  {" "}
                  300+
                </h2>
                <h3 className="font-onset font-normal text-black text-base max-md:text-[1.4rem] ">
                  Completed projects
                </h3>
              </div>
              <div className="   border min-w-min	 border-[#424242]"></div>
              <div className=" flex flex-col items-start gap-[6.85px]">
                <h2 className="font-onset text-black font-normal text-5xl max-md:text-[5.75rem] ">
                  {" "}
                  200+
                </h2>
                <h3 className="font-onset font-normal text-black text-base max-md:text-[1.4rem] ">
                  Customers
                </h3>
              </div>
            </div>

            <div className="flex flex-row pb-20  max-md:w-3/4 justify-between">
              <div className=" flex flex-col items-start gap-[6.85px]">
                <h2 className="font-onset text-black font-normal text-5xl  max-md:text-[5.75rem] ">
                  {" "}
                  99%
                </h2>
                <h3 className="font-onset font-normal text-black text-base max-md:text-[1.4rem] ">
                  Customers satisfaction
                </h3>
              </div>
              <div className="  border min-w-min	align-center border-[#424242]"></div>
              <div className=" flex flex-col items-start gap-[6.85px]">
                <h2 className="font-onset text-black font-normal text-5xl max-md:text-[5.75rem] ">
                  {" "}
                  200+
                </h2>
                <h3 className="font-onset font-normal text-black text-base  max-md:text-[1.4rem]">
                  Awards received
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
