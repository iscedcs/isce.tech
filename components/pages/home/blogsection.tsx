import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { blog } from "@/lib/const";
import Link from "next/link";

export default function BlogSection({ showButton = true }) {
  return (
    <div className="bg-[#F2f2F7] w-full py-12 overflow-hidden">
      {/* BLOG SECTION */}
      <MaxWidthWrapper>
        <div>
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            <div className="mb-8">
              <p className="text-[15px] sm:text-sm tracking-wider text-[#000000] flex flex-row gap-3">
                <span className="flex  items-center h-[0.5px] sm:h-[1%] justify-center">
                  <img src="/images/arrow.svg" />
                </span>{" "}
                NEWS & BLOG
              </p>
              <h2 className="text-sm sm:text-2xl md:text-3xl font-semibold mt-1">
                Read Our Blog <span className="font-normal">& News</span>
              </h2>
            </div>

            {showButton && (
              <Link href="/blog">
                <button className="block px-4 py-2 bg-gradient-to-r from-[#0086FF] to-[#B0D9FF] text-white text-sm rounded-lg">
                  View All Blog
                </button>
              </Link>
            )}
          </div>
          {showButton ? (
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-6">
                {blog.concat(blog).map((item, idx) => (
                  <article
                    key={idx}
                    className="min-w-[300px] inline-block relative pb-12 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1"
                  >
                    {/* Top Image */}
                    <div className="w-full h-80 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.post_title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Category + Date */}
                      <div className="flex gap-10 items-center justify-left text-xs text-[#404040] mb-3">
                        <span className="text-[#325239] rounded-full text-[11px] font-medium">
                          {item.post}
                        </span>
                        <span>{item.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[15px] md:text-base font-semibold text-gray-900 leading-snug mb-6">
                        {item.post_title}
                      </h3>

                      {/* Button row */}
                      <div className="absolute left-5 top-110 flex justify-start items-center">
                        <Link href={`/blog/${item.id}`}>
                          <button
                            aria-label="read more"
                            className="w-8 h-8 rounded-full border border-[#8C8C8C] bg-white flex items-center justify-center text-[#000000] hover:bg-gray-100 shadow-sm"
                          >
                            +
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-15">
              {blog.map((item, idx) => (
                <article
                  key={idx}
                  className="relative pb-8 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1"
                >
                  {/* Top Image */}
                  <div className="w-full h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.post_title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category + Date */}
                    <div className="flex gap-10 items-center justify-left text-xs text-[#404040] mb-3">
                      <span className=" text-[#325239] rounded-full text-[11px] font-medium whitespace-nowrap">
                        {item.post}
                      </span>
                      <span className="whitespace-nowrap">{item.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] md:text-base font-semibold text-gray-900 leading-snug mb-6">
                      {item.post_title}
                    </h3>

                    {/* Button row */}
                    <div className="absolute left-5 top-10 flex justify-start items-center">
                      <Link href={`/blog/${item.id}`}>
                        <button
                          aria-label="read more"
                          className="w-8 h-8 rounded-full border border-[#8C8C8C] bg-white flex items-center justify-center text-[#000000] hover:bg-gray-100 shadow-sm"
                        >
                          +
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
