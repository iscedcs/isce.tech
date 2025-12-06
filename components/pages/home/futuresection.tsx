export default function Future() {
  return (
    <section className=" w-full bg-[#07101D] text-white overflow-hidden">
      {/* TOP BADGE */}

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center pt-10">
          <div className="px-3 py-2 rounded-full border-2 border-[#404040]  text-xs xl:text-[18px] flex items-center gap-2 bg-gradient-to-r from-[#231942] to-[#7F3FBF] via-[#3842D1] bg-clip-text text-transparent">
            <span className="flex items-center justify-center w-2 h-2 xl:w-3 xl:h-3 ">
              <img src="/images/Vector.svg" />
            </span>{" "}
            YOUR JOURNEY STARTS HERE
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mt-4">
          <h2 className="text-[38px] sm:text-4xl lg:text-[40px] xl:text-[50px] text-[#8C8C8C] font-semibold mb-0.5 z-15">
            Step Into
          </h2>
          <svg
            viewBox="0 0 440 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:hidden absolute w-full h-auto -mt-18 z-0"
          >
            <path
              d="M0 39.8603C84.1131 -12.7554 132.33 -9.79671 220 39.8603C300.405 84.9779 348.995 84.4478 440 39.8603"
              stroke="#274058"
              strokeOpacity="0.24"
              strokeWidth="3"
            />
          </svg>

          <svg
            viewBox="0 0 1580 210"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="hidden 2xl:hidden sm:block w-full h-auto absolute -mt-16 lg:-mt-20 xl:-mt-27 z-0 px-4 pl-8 md:px-10 md:pl-24 xl:px-20"
          >
            <path
              d="M0.75 125C250.341 -19.2895 414.842 -58.8596 789.75 125C1177.5 242.346 1340.79 228.389 1578.75 125"
              stroke="#274058"
              strokeOpacity="0.24"
              stroke-width="3"
            />
          </svg>

          <h2 className="text-[38px] sm:text-4xl lg:text-[40px] xl:text-[50px] font-semibold text-[#0086FF]">
            The Future
          </h2>
          <p className="text-[#8C8C8C] mt-4 text-[23px] sm:text-[10px] lg:text-[14px] xl:text-[16px] justify-center px-11 sm:text-base">
            Transform your vision into reality with our proven methodology
          </p>
        </div>

        {/* STEPS GRID */}

        <svg
          viewBox="0 0 440 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:hidden absolute w-full h-auto mt-20 z-0"
        >
          <path
            d="M0 39.8603C84.1131 -12.7554 132.33 -9.79671 220 39.8603C300.405 84.9779 348.995 84.4478 440 39.8603"
            stroke="#274058"
            strokeOpacity="0.24"
            stroke-width="3"
          />
        </svg>
        <svg
          viewBox="0 0 1580 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden 2xl:hidden sm:block w-full h-auto absolute -mt-4 lg:-mt-9 xl:-mt-13 z-0 px-4 pl-8 md:px-10 md:pl-24 xl:px-20 xl:pl-26"
        >
          <path
            d="M0.75 125C250.341 -19.2895 414.842 -58.8596 789.75 125C1177.5 242.346 1340.79 228.389 1578.75 125"
            stroke="#274058"
            strokeOpacity="0.24"
            stroke-width="3"
          />
        </svg>

        <svg
            width="600"
            height="2"
            viewBox="0 0 1488 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block absolute mt-25 lg:mt-28 z-0 px-4 pl-10 md:pl-24 lg:ml-40"

          >
            <line
              x1="8.74228e-08"
              y1="1"
              x2="1488"
              y2="1.00013"
              stroke="#15415A"
              stroke-width="2"
            />
          </svg>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 px-4 sm:mx-6 md:px-18">
          <svg
            width="2"
            height="645"
            viewBox="0 0 2 924"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block sm:hidden absolute left-1/2 "
          >
            <line
              x1="1"
              y1="924"
              x2="1.00004"
              y2="-4.37113e-08"
              stroke="#15415A"
              stroke-width="2"
            />
          </svg>
          
          {[
            {
              num: "01",
              title: "Driven By Innovation",
              desc: "At ISCE we turn bold ideas into digital solutions that challenge norms and shape the future.",
            },
            {
              num: "02",
              title: "Marketing & Innovation",
              desc: "We merge data and creativity to craft campaign that drive engagement and growth.",
            },
            {
              num: "03",
              title: "Our Journey & History",
              desc: "From a small team to a thriving ecosystem, our story is built on passion and purpose.",
            },
            {
              num: "04",
              title: "Our Vision & Values",
              desc: "Redefining Africa’s tech landscape into a leading global force.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#0E1A2A] to-[#0B131C] border border-[#2A3240] rounded-xl p-5 sm:p-3 shadow-lg z-10"
            >
              <p className="bg-gradient-to-b from-[#6A5BFF] to-[#18A6FF] bg-clip-text text-transparent font-bold text-[40px] sm:text-[17px] lg:text-[20px] xl:text-[25px]">
                {item.num}
              </p>
              <p className="font-semibold text-[20px] mt-2 sm:text-[8px] lg:text-[14px] xl:text-[18px] text-[#E6EEF8]">
                {item.title}
              </p>
              <p className="text-[#9AA6B0] text-[13px] sm:text-[7px] lg:text-[11px] xl:text-[15px] pb-2 py-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* IMAGE + TEXT SECTION */}
        <div className="mt-16 flex flex-col gap-10 md:gap-0 sm:flex-row items-stretch bg-gradient-to-r from-[#0E1622] to-[#0B111A]">
          {/* IMAGE LEFT (mobile goes bottom) */}
          <div className="w-full sm:w-3/4 h-full order-2 md:order-1">
            <img
              src="/images/team.jpg"
              alt="Team"
              className="w-full h- object-cover"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="text-center sm:text-left w-full sm:w-1/2 order-1 sm:order-2 sm:mt-0  py-2 sm:py-0 md:px-10 ">
            <h2 className="text-3xl sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[40px] font-bold mt-5">
              Path to Digital
            </h2>
            <p className="text-2xl sm:text-[15px] md:text-[20px] lg:text-[30px] xl:text-[40px]">Excellence</p>

            <p className="text-gray-300 mt-3 text-[15px] sm:text-[10px] lg:text-[15px] xl:text-[25px]text-center sm:text-left">
              We seek to improve the standard of modern living<br/> by innovating
              digital solutions to make life easier.
            </p>

            {/* STATS */}
            <div className="flex gap-10 mt-8 sm:mt-4 items-center justify-center sm:justify-start">
              <div className="flex flex-col items-center">
                <div className="relative md:text-[25px] border-[2px] border-[#FFFFFF] w-25 h-25 sm:w-19 sm:h-19 md:w-23 md:h-23 lg:h-29 lg:w-29 rounded-full flex justify-center items-center max-[250]:text-sm text-xl font-bold ">
                  <img
                    src="/images/Ellipse 25.svg"
                    className="absolute w-20 h-20  sm:w-15 sm:h-15 md:h-19 md:w-19 lg:h-25 lg:w-25"
                  />
                  93% 
                </div>
                <p className="text-[14px] sm:text-[10px] md:text-[11
                'px] lg:text-[15px] text-white mt-3 text-center sm:text-left">
                  Business Growth
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative md:text-[25px] border-[2px] border-[#FFFFFF] w-25 h-25 sm:w-19 sm:h-19 md:w-23 md:h-23 lg:w-29 lg:h-29 rounded-full flex justify-center items-center max-[250]:text-sm text-xl font-bold">
                  <img
                    src="/images/Ellipse 25.svg"
                    className="absolute w-20 h-20 sm:w-15 sm:h-15 md:w-19 md:h-19 lg:w-25 lg:h-25"
                  />
                  10+
                </div>
                <p className="text-[14px] md:text-[11px] sm:text-[10px] lg:text-[15px] text-white mt-3 text-center sm:text-left">
                  Developed Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
