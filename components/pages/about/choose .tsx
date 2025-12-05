import React from "react";

export default function WhyChooseISCE() {
  const values = [
    {
      title: "Proven Excellence",
      text: "Years of experience delivering award- winning solutions to clients across industries",
    },
    {
      title: "Cutting-Edge Technology",
      text: "We leverage the latest technologies to build future-proof solutions.",
    },
    {
      title: "Expert Teams",
      text: "Our talented team of designers, developers, and strategists bring ideas to life",
    },
    {
      title: "Data Security & Privacy",
      text: "Prioritizing the security and privacy of user data, adhering to industry best practices and compliance standard",
    },
    {
      title: "Innovation First",
      text: "Constantly pushing boundaries to deliver innovative solution",
    },
    {
      title: "Result Driven",
      text: "We focus on measurable outcomes that drive real business growth",
    },
    {
      title: "Global Perspective",
      text: "Local expertise with a global mindset to serve clients worldwide",
    },
  ];

  return (
    <section className="w-full bg-[#E8E5DF] py-7 xl:py-16 px-2 md:px-10 relative overflow-hidden">
      {/* background curved lines */}
      <div className="max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 w-72 h-72 border-[1.5px] border-[#d6d3cc] rounded-full opacity-40 -translate-x-16 -translate-y-10"></div>
        <div className="absolute left-0 top-0 w-96 h-96 border-[1.5px] border-[#d6d3cc] rounded-full opacity-30 -translate-x-32 -translate-y-20"></div>

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <div className="flex mb-5 items-center justify-center gap-2 text-sm tracking-wide text-black">
            <img src="/images/arrow.svg" alt="arrow" />
            CORE VALUES
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[45px] font-normal">
            Why Choose <span className="font-semibold">ISCE</span>
          </h2>
        </div>

        {/* Grid */}
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xl:gap-6 relative z-10">
          {values.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 px-4 animate-fadeInUp opacity-0"
              style={{
                animationDelay: `${index * 0.12}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Icon */}
              <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-md bg-blue-600 flex items-center justify-center shadow-md">
                <img src="/images/circle.svg" />
              </div>

              <h3 className="text-[14px] sm:text-[9px] md:text-[11px] lg:text-[14px] xl:text-[21px] font-semibold">{item.title}</h3>
              <p className="text-[10px] sm:text-[6px] md:text-[8px] lg:text-[11px] xl:text-[15px] text-gray-700 leading-relaxed max-w-[250px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile layout fix: ensure perfect stacking */}
        <style>
          {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out;
          }
        `}
        </style>
      </div>
    </section>
  );
}
