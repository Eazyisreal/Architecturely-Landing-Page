import "../index.css";

export default function Header() {
  return (
    <div>
      <header className="flex flex-row justify-between items-center">
        <a href="">
          <h1 className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
            Architecturely{" "}
          </h1>
        </a>

        <nav className="p-5 fle flex-row items-center">
          <ul className=" flex-row flex gap-5">
            <li className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
              {" "}
              <a href=""  className="" > Home</a>
            </li>
            <li className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
              {" "}
              <a href=""> About </a>
            </li>
            <li className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
              {" "}
              <a href=""> Portfolio </a>
            </li>
            <li className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
              {" "}
              <a href=""> Blog </a>
            </li>
            <li className="font-onest font-normal h-8 tracking-widest uppercase text-xl p-8">
              {" "}
              <a href=""> Contact us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
