import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

const luxuryCards = [
  {
    src: "/images/living.svg",
    alt: "Smart Living Icon",
    title: "Smart Living",
    description:
      "Transform your lifestyle with intelligent automation and connected devices.",
  },
  {
    src: "/images/tech.svg",
    alt: "Contactless Tech Icon",
    title: "Contactless Tech",
    description: "Seamless NFC and wireless solutions for modern convenience.",
  },
  {
    src: "/images/payment.svg",
    alt: "Digital Payments Icon",
    title: "Digital Payments",
    description: "Secure, instant transactions for the cashless economy.",
  },
];

export default function LuxurySection() {
  return (
    <section className="bg-[#0E1622] text-white py-20 overflow-hidden">
      <MaxWidthWrapper>
        <div className="text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-[#404040] bg-white/5 px-4 py-2 text-xs lg:text-sm mb-6">
            <span className="bg-linear-to-r from-[#231942] via-[#3842D1] to-[#7F3FBF] bg-clip-text text-transparent font-semibold tracking-[0.18em] uppercase">
              THE FUTURE IS NOW
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-[#8C8C8C]">
            Redefining Luxury
            <br />
            <span className="block text-[#0086FF] text-3xl sm:text-4xl font-semibold">
              with Tech
            </span>
          </h2>

          <p className="mt-4 text-xl text-white">
            Live Smart. Share Seamlessly.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#8C8C8C]">
            Enter a contactless world where technology enhances every
            interaction. From NFC-powered experiences to smart automation, we're
            building the infrastructure for tomorrow’s connected lifestyle.
          </p>

          <div className="grid gap-6 sm:grid-cols-3 mt-12">
            {luxuryCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#161B35] rounded-3xl border border-[#2D3248] p-8 min-w-0 text-left">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#404040]">
            The Contact-less World
          </h3>

          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-4xl border border-[#404040] h-80 sm:h-[420px] lg:h-[520px]">
              <Image
                src="/images/hand.png"
                alt="Contactless Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <video
                src="/images/videos/ISCE CARD.mp4"
                controls
                className="absolute inset-0 h-full w-full object-cover z-10"
              />
              <div className="absolute inset-x-0 top-6 z-20 flex justify-center px-4">
                <div className="rounded-full bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-sm">
                  The Future is Here, Now....
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
