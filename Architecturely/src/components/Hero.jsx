import heroImage from "../assets/images/hero-image.svg";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <div
        className=" bg-background bg-cover bg-center bg-blend-darken bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Header />
        
      </div>
    </>
  );
}
