import Image from "next/image";
import clickGif from "../../public/icons8-click.gif";
export default async function Home() {
  return (
    <div className="flex items-center justify-center h-screen px-4">
      <div className="flex items-center justify-center text-sm sm:text-3xl md:text-4xl lg:text-5xl ">
        <Image src={clickGif} alt="clickGif" className="invert-[1]" />
        <p className="text-white font-mono overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing text-shadow-lg">
          <span
            className="backdrop-blur-md px-2 rounded-md"
            style={{ textShadow: "6px 0px 10px #00bdff" }}
          >
            &nbsp;Get Profile to view GitHub profile
          </span>
        </p>
      </div>
    </div>
  );
}
