import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { blog } from "@/lib/const";
import { LeftIcon } from "@/lib/icons";
import Link from "next/link";
import SmoothBlogScroll from "./blogscroll";

export default function BlogSection({ showButton = true }) {
  return (
    <div className="bg-[#F2f2F7] w-full py-12 overflow-hidden">
      {/* BLOG SECTION */}
      <MaxWidthWrapper>
        <div>
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            <div className="mb-8">
              <p className="text-sm sm:text-xs tracking-wider text-[#000000] flex flex-row gap-3">
                <span className="flex  items-center  justify-center">
                  <img src="/images/arrow.svg" />
                </span>{" "}
                NEWS & BLOG
              </p>
              <h2 className="text-2xl font-semibold mt-1">
                Read Our Blog <span className="font-normal">& News</span>
              </h2>
            </div>

            {showButton && (
              <Link href="/blog">
                <button className="flex items-center gap-2 justify-center px-4 py-2 bg-linear-to-r from-[#0086FF] to-[#B0D9FF] text-white text-sm rounded-lg">
                  View All Blog
                  <LeftIcon />
                </button>
              </Link>
            )}
          </div>
          {showButton ? (
             <SmoothBlogScroll 
          blog={blog}
          speed={250} // Adjust speed (40-60 is good for blog cards)
          cardWidth={320} // Adjust if you want wider cards
        />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-15">
              {blog.map((item, idx) => (
                <article
                  key={idx}
                  className="relative pb-8 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1">
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
                    <div className="absolute left-5 top-107 flex justify-start items-center">
                      <Link href={`/blog/${item.id}`}>
                        <button
                          aria-label="read more"
                          className="w-8 h-8 rounded-full border border-[#8C8C8C] bg-white flex items-center justify-center text-[#000000] hover:bg-gray-100 shadow-sm">
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
