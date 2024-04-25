import "./layout.css";

const Header = () => {
  return (
    <div
      className="relative bg-[#373373]   px-[30px] py-[15px]"
      style={{ borderBottom: "6px solid #37a864" }}
    >
      <div className="container mx-auto w-full">
        <div className="flex justify-center gap-5 flex-wrap items-center">
          <img src="./assets/images/win-your-rent.c34a34ac.jpg" alt="" />
          <div className="info-3378363624 flex flex-col ">
            <span className="  text-[#ffd255] font-semibold text-[18px] leading-[26px]">
              Win up to $5,000 towards your rent!
            </span>
            <span className="text-[#ffff] font-normal text-[14px] leading-[18px]">
              Enter the Kijiji Win Your Rent Event now
            </span>
          </div>
          <button className="bg-[#9b44ad]  text-[#ffd255] text-[13px] leading-[18px] py-[6px] px-[10px] rounded-[4px] border border-[#ffffff00] ">
            Let&apos;s GOOOOO!
          </button>
        </div>
      </div>
      <div className="img absolute right-[20px] top-[15px] cursor-pointer">
        <img src="./assets/images/close.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
