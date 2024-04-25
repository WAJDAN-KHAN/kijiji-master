import { useMenu } from "../../../hooks/useMenu";
import image1 from "/assets/images/pic-1.webp";
import image2 from "/assets/images/pic-2.webp";
import image3 from "/assets/images/pic-3.webp";
import image4 from "/assets/images/pic-4.webp";
import image5 from "/assets/images/pic-5.webp";
import image6 from "/assets/images/pic-6.webp";
import image7 from "/assets/images/pic-7.webp";
import image8 from "/assets/images/pic-8.webp";
import image9 from "/assets/images/pic-9.webp";
import image10 from "/assets/images/pic-10.webp";
import image11 from "/assets/images/pic-11.webp";
import image12 from "/assets/images/pic-12.webp";
import image13 from "/assets/images/pic-13.webp";
import image14 from "/assets/images/pic-14.webp";
import image15 from "/assets/images/pic-15-a.webp";
import image16 from "/assets/images/pic-16-a.webp";
import image17 from "/assets/images/pic-17-a.webp";

import appStore from "/assets/images/appstore.png";
import playStore from "/assets/images/googleplay.png";

import Card from "../shared/Card";
import { GoChevronRight } from "react-icons/go";

const cars1 = [
  {
    title: "",
    image: image1,
  },
  {
    title: "Cars & Trucks",
    image: image2,
  },
  {
    title: "Classic Cars",
    image: image3,
  },
  {
    title: "RV's, Campers & Trailers",
    image: image4,
  },
  {
    title: "Boats & Watercraft",
    image: image5,
  },
  {
    title: "Motorcycles",
    image: image6,
  },
  {
    title: "Vehicle Parts, Tires & Accessories",
    image: image7,
  },
  {
    title: "Heavy Equipment",
    image: image8,
  },
];

const buy = [
  {
    title: "Furniture",
    image: image9,
  },
  {
    title: "Home-Outdoor & Garden",
    image: image10,
  },
  {
    title: "Tools",
    image: image11,
  },
];
const realEstate = [
  {
    title: "Appartmetns & Condos for Rent",
    image: image12,
  },
  {
    title: "Houses for Rent",
    image: image13,
  },
  {
    title: "Houses for Sale",
    image: image14,
  },
];

const central = [
  {
    title: "How to make & save money from home",
    image: image15,
  },
  {
    title: "How to find the perfect appartment for rent on ...",
    image: image16,
  },
  {
    title: "8 essential tools to have onn hand for jobs aroun...",
    image: image17,
  },
];

const Hero = () => {
  const { setMenu } = useMenu();
  return (
    <>
      <div className="bg-primary" onMouseOver={() => setMenu(false)}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 flex flex-col gap-y-4  sm:flex-row sm:items-center">
          <div className=" sm:flex-1">
            <h5 className="text-white font-semibold text-[22px] max-w-[60%] mx-auto  leading-[26px]">
              Score a chance to win up to{" "}
              <span className="text-[#37a864] font-semibold text-[22px]">
                $5,000 towards your rent!
              </span>
            </h5>
          </div>
          <div className="bg-hero flex items-center justify-center sm:flex-1 w-full h-[200px] rounded-lg shadow-lg group">
            <span className="bg-white px-4 py-1 rounded-[2px] font-semibold text-primary group-hover:bg-primary transition-all group-hover:text-white text-[18px]">
              Heck yeah!
            </span>
          </div>
        </div>
      </div>
      {/*  Bottom Hero */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 grid gap-x-12 grid-cols-1 custom-lg:grid-cols-[4fr_1fr]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between flex-col  gap-4  sm:flex-row">
            <h2 className="text-[20px] font-medium text-primary">
              Popular in Autos in Territories
            </h2>
            <a
              href="#"
              className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
            >
              Browse all Autos in Territories
            </a>
          </div>
          {/*  Grid */}
          <div className="grid grid-cols-2 custom-md:grid-cols-4 gap-x-6 gap-y-4">
            {cars1.map((car, index) => (
              <Card key={index} car={car} />
            ))}
          </div>
          {/*  Buy and Sell Grid */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between flex-col sm:flex-row ">
              <h2 className="text-[20px] font-medium text-primary">
                Popular in Buy and Sell in Territories
              </h2>
              <a
                href="#"
                className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Browse all Buy and Sell in Territories
              </a>
            </div>
            {/*  Grid */}
            <div className=" hidden  sm:grid sm:grid-cols-3 sm:gap-x-6 gap-y-4  overflow-x-auto ">
              {buy.map((car, index) => (
                <div
                  className="rounded-sm snap-center relative group cursor-pointer   sm:w-full   sm:h-full"
                  key={index}
                >
                  <img
                    src={car.image}
                    alt={car.title}
                    className="  object-cover rounded-sm   sm:w-full   sm:h-full "
                  />
                  {car.title !== "" && (
                    <p
                      className="text-[14px] sm:text-[16px] p-[5px] rounded-[2px] w-[80%] max-w-max  mx-auto bg-primary/80 text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  group-hover:bg-white group-hover:text-primary transition-all
                text-center
                "
                    >
                      {car.title}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="block sm:hidden relative w-full overflow-hidden">
              <div className="flex overflow-x-auto snap-x-mandatory">
                {buy.map((car, index) => (
                  <div
                    className="rounded-sm snap-center relative group cursor-pointer   flex-none w-full "
                    key={index}
                  >
                    <img
                      src={car.image}
                      alt={car.title}
                      className="  object-cover rounded-sm   sm:w-full   sm:h-full "
                    />
                    {car.title !== "" && (
                      <p
                        className="text-[16px] sm:text-[16px] p-[5px] rounded-[2px] w-[80%] max-w-max  mx-auto bg-primary/80 text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  group-hover:bg-white group-hover:text-primary transition-all
                text-center
                "
                      >
                        {car.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-4 bg-primary flex flex-col items-center px-6 py-12 text-white rounded-[5px] gap-[10px]">
            <h2 className="text-[22px] font-bold leading-[26px] text-center">
              Kijiji&apos;s better when you&apos;re a member
            </h2>
            <p className="text-[16px] font-normal mb-[25px] text-center">
              See more relevant listings, find what you&apos;re looking for
              quicker, and more!
            </p>
            <button
              className="text-[#155e9b] bg-white border-[1px] border-sold border-white underline hover:no-underline hover:bg-transparent transition-all
            py-4 px-8 rounded-[5px]
            "
            >
              Sign in
            </button>
          </div>
          {/*  Real Estate */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between">
              <h2 className="text-[20px] font-medium text-primary">
                Popular in Real Estate in Territories
              </h2>
              <a
                href="#"
                className="text-[14px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Browse all Real Estate in Territories
              </a>
            </div>
            {/*  Grid */}
            <div className="hidden sm:grid grid-cols-3 gap-x-6 gap-y-4">
              {realEstate.map((car, index) => (
                <Card key={index} car={car} />
              ))}
            </div>

            <div className="block sm:hidden relative w-full overflow-hidden">
              <div className="flex overflow-x-auto snap-x-mandatory">
                {realEstate.map((car, index) => (
                  <div
                    className="rounded-sm snap-center relative group cursor-pointer   flex-none w-full "
                    key={index}
                  >
                    <img
                      src={car.image}
                      alt={car.title}
                      className="  object-cover rounded-sm   sm:w-full   sm:h-full "
                    />
                    {car.title !== "" && (
                      <p
                        className="text-[16px] sm:text-[16px] p-[5px] rounded-[2px] w-[80%] max-w-max  mx-auto bg-primary/80 text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  group-hover:bg-white group-hover:text-primary transition-all
                text-center
                "
                      >
                        {car.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  Kijie Central*/}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <h2 className="text-[20px] font-medium text-primary">
                Kijiji Central
              </h2>
            </div>
            {/*  Grid */}
            <div className="hidden sm:grid grid-cols-3 gap-x-6 gap-y-4">
              {central.map((car, index) => (
                <div
                  className="rounded-sm relative group cursor-pointer "
                  key={index}
                >
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <div className="bg-gradient absolute bottom-0 right-0  h-[36px] flex items-center  pb-6">
                    <p className="text-white font-semibold text-[14px] px-2 mb-4 text-ellipsis ">
                      {car.title}
                    </p>
                    <img
                      src="/assets/images/central-svg.svg"
                      alt="central"
                      className="w-[30px] h-[30px] mb-4"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="block sm:hidden relative w-full overflow-hidden">
              <div className="flex overflow-x-auto snap-x-mandatory">
                {central.map((car, index) => (
                  <div
                    className="rounded-sm snap-center relative group cursor-pointer   flex-none w-full "
                    key={index}
                  >
                    <img
                      src={car.image}
                      alt={car.title}
                      className="  object-cover rounded-sm   sm:w-full   sm:h-full "
                    />
                    <div className="bg-gradient absolute bottom-0 right-0 left-0 h-[36px] flex items-center  pb-6 justify-between">
                      <p className="text-white font-semibold text-[14px] px-2 mb-4 text-ellipsis ">
                        {car.title}
                      </p>
                      <img
                        src="/assets/images/central-svg.svg"
                        alt="central"
                        className="w-[30px] h-[30px] mb-4"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*  Left Side */}
        <div className="hidden custom-lg:flex flex-col gap-4">
          <h2 className="text-[20px] font-medium text-primary">
            Popular on Kijiji
          </h2>
          <div className="flex flex-col gap-4">
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Free Stuff
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Wanted Ads
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
            <span className="flex justify-between items-center">
              <a
                href="#"
                className="text-[16px] text-[#155e9b] font-semibold underline hover:no-underline transition-all"
              >
                Swap/Trade
              </a>
              <GoChevronRight className="text-[#155e9b] text-[16px]" />
            </span>
          </div>
        </div>
      </div>
      {/*  Above Footer */}
      <div className="max-w-[1440px] px-4  sm:px-8   my-16 mx-auto">
        <div className="bg-primary rounded-[5px] flex flex-col items-center pt-8  custom-md:flex-row   justify-evenly custom-ml:h-[230px] overflow-y-hidden  px-6 custom-ml:px-0">
          <div className="flex flex-col gap-4 text-white justify-center">
            <h2 className="text-[22px] font-semibold leading-[26px]">
              Take Canada&apos;s #1 classified site with you{" "}
            </h2>
            <p className="font-normal">
              Buy and sell new or used items wherever you go!
            </p>
            <div className="flex gap-4">
              <img
                src={appStore}
                alt="appstore"
                className="w-[100px] h-[40px] sm:w-[150px] sm:h-[50px] rounded-md border-[1px] border-solid border-white"
              />
              <img
                src={playStore}
                alt="playstore"
                className="w-[100px] h-[40px] sm:w-[150px] sm:h-[50px] rounded-md border-[1px] border-solid border-white"
              />
            </div>
          </div>
          <div>
            <img
              src="/assets/images/pic-mobile.png"
              alt="mobile-apps"
              className="h-[150px] translate-y-[42px]  custom-ml:h-[270px] cutsom-ml:-translate-y-[42px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
