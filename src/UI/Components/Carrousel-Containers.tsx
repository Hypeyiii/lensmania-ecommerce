import { Link } from "react-router-dom";

export function ModernGlasses() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center relative [&>div>img]:hover:scale-105">
      <div className="bg-cover overflow-hidden w-full h-[150px] md:h-[500px] ">
        <img
          src="https://www.reallusion.com/ContentStore/iClone/pack/Modern_Glasses/images/Main_page_1920x700.jpg"
          alt="Imagen promocional de lentes de sol modernos"
          className="w-full h-full dark:opacity-50 transition-all duration-1000"
        />
      </div>
      <div className="md:absolute md:right-10 top-0 bottom-0 h-full md:w-[400px] text-center m-auto flex flex-col gap-2 md:gap-4 justify-center items-center">
        <h1 className="text-white text-base md:text-4xl font-bold">
          Modern Glasses, quality and style
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-2xl">
          ¡Found the perfect style for you!
        </p>
        <Link to={"collection/Sun"}>
          <button className="border border-white rounded-lg text-white font-semibold py-2 md:py-4 px-3 md:px-6 uppercase md:-translate-y-2 hover:translate-y-0 transition">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
}
export function ClassicGlasses() {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center relative [&>div>img]:hover:scale-105">
      <div className="bg-cover overflow-hidden w-full h-[150px] md:h-[500px] ">
        <img
          src="https://www.nseyewear.com/static/module/index/xinli/fodder/land/land-sunglass-screen.jpg"
          alt="Imagen promocional de lentes de sol modernos"
          className="w-full h-full dark:opacity-50 transition-all duration-1000"
        />
      </div>
      <div className="md:absolute md:right-10 top-0 bottom-0 h-full md:w-[400px] text-center m-auto flex flex-col gap-2 md:gap-4 justify-center items-center">
        <h1 className="text-white text-base md:text-4xl font-bold">
          Vintage Glasses, classic and cheap
        </h1>
        <p className="text-white text-sm md:text-lg lg:text-2xl">
          ¡Found the perfect style for you!
        </p>
        <Link to={"collection/Sun"}>
          <button className="border border-white rounded-lg text-white font-semibold py-2 md:py-4 px-3 md:px-6 uppercase md:-translate-y-2 hover:translate-y-0 transition">
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
}
export function SpaceGlasses() {
    return (
      <div className="w-full flex flex-col gap-4 justify-center items-center relative [&>div>img]:hover:scale-105">
        <div className="bg-cover overflow-hidden w-full h-[150px] md:h-[500px] ">
          <img
            src="https://images.accentuate.io/?c_options=w_2160&shop=hellovisionist.myshopify.com&image=https://cdn.accentuate.io/85322956957/1632775749188/Matthew_Donovan_A_3457-Yellow-(3).jpeg?v=0"
            alt="Imagen promocional de lentes de sol modernos"
            className="w-full h-full dark:opacity-50 transition-all duration-1000"
          />
        </div>
        <div className="md:absolute md:left-5 top-0 bottom-0 h-full md:w-[400px] text-center m-auto flex flex-col gap-2 md:gap-4 justify-center items-center">
          <h1 className="text-white text-base md:text-4xl font-bold">
            Vision Glasses, quality and style
          </h1>
          <p className="text-white text-sm md:text-lg lg:text-2xl">
            Watch the perfection!
          </p>
          <Link to={"collection/Vision"}>
            <button className="border border-white rounded-lg text-white font-semibold py-2 md:py-4 px-3 md:px-6 uppercase md:-translate-y-2 hover:translate-y-0 transition">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    );
  }
export default { ModernGlasses, ClassicGlasses, SpaceGlasses };