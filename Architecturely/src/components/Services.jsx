import "../index.css";
import architecture from "../assets/images/architecture.svg";
import interior from "../assets/images/interior.svg";
import decoration from "../assets/images/decoration.svg";

export default function Services() {
    return (
        <>
            <div className="bg-black flex pt-20 px-8 flex-col">
                <div className="max-md:flex  max-md:gap-[20rem] ">
                    <h2 className="text-white whitespace-nowrap font-medium text-4xl pb-12 font-onest  ">
                        Our services
                    </h2>
                    <p className="text-[#A5A5A5] max-lg:px-[20rem]  text-base leading-[2]  pb-8 font-normal font-onest ">
                        We take pride in our commitment to quality, creativity, and client
                        satisfaction. Our goal is to provide you with a service that not only
                        meets your expectations but exceeds them. Contact us today to learn
                        more about how we can help bring your architectural dreams to life.
                    </p>
                </div>

                <div className="flex pb-8 snap-x snap-mandatory gap-4 flex-row  w-full">
                    <div className="flex flex-col w-full">
                        <img
                            className="w-full snap-start "
                            src={architecture}
                            alt="Architectural Design Image"
                        />
                        <p className="text-white font-normal pt-4 text-xl font-onest">Architectural Design</p>
                    </div>

                    <div className="flex flex-col w-full">
                        <img
                            className="w-full snap-start "
                            src={interior}
                            alt="Interior Design Image"
                        />
                        <p className="text-white font-normal pt-4 text-xl font-onest">Interior Design</p>
                    </div>

                    <div className="flex flex-col w-full">
                        <img
                            className="w-full snap-start "
                            src={decoration}
                            alt="Architectural Design Image"
                        />
                        <p className="text-white font-normal pt-4 text-xl font-onest">Decoration</p>
                    </div>


                </div>
            </div>
        </>
    );
}
