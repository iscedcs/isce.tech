import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function AboutUs() {
  return (
    <section className="bg-[#07111F] py-16 md:py-24 lg:py-32 ">
      <MaxWidthWrapper>
        <div className="text-center text-[#D9D9D9]">
          <h2 className="text-[30px] sm:text-[35px] md:text-[40px] xl:text-[45px] mb-4">
            About <span className="font-semibold">ISCE</span>
          </h2>

          <p className="text-gray-300 text-[16px] sm:text-[10px] md:text-[12px] lg:text-[18px]  leading-relaxed">
            We are a young, vibrant team of innovators passionate about
            leveraging technology to create meaningful solutions that shape the
            future of digital experiences.
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
