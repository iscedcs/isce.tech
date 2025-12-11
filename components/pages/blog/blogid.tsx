"use client";

import Image from "next/image";
import { blog } from "@/lib/const";
import Link from "next/link";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface BlogPostProps {
  id: number;
}

export default function BlogPost({ id }: BlogPostProps) {
  const post = blog.find((p) => p.id === id);

  console.log("BlogPost id:", id, "Found post:", post);
  if (!post) return <div>Post not found</div>;

  return (
    <section className="w-full flex justify-center bg-[#F2F2F7] py-10 md:py-16">
      <MaxWidthWrapper>
      <div className="w-full max-w-4xl px-4 md:px-0">
        {/* ---------- Header Category ----------*/}
        <Link href="/blog">
        <div className="flex flex-row gap-3 mb-4 ">
        <img src="/images/arrowleft.svg" className="w-4 h-b" />
        <p className="text-[#0065BF]">Back to Blog</p>
        </div>
        </Link>
        <p className="hidden sm:block w-30 text-xs text-[#0065BF] uppercase mb-3 bg-[#E6F3FF]  px-2 py-1 rounded-full text-[11px] font-bold">
          {post.post}
        </p>

        {/* ---------- Title ---------- */}
        <h1 className="text-2xl md:text-5xl font-bold text-[#0D1520] mb-3 leading-snug">
          {post.post_title}
        </h1>

        {/* ---------- Meta ---------- */}
        <div className="hidden sm:flex items-center gap-4 text-sm text-[#6D7380] mb-6">
          <span className="flex items-center gap-1">
            <img src="/images/date.svg" className="w-4 h-4" />
          </span>
          <span className="text-[#A4A9B3]">{post.date}</span>
        </div>
        <div className="flex flex-row gap-8 sm:hidden">
          <p className="w-30 text-xs text-[#0065BF] uppercase mb-3 bg-[#E6F3FF]  px-2 py-1 rounded-full text-[11px] font-bold">
            {post.post}
          </p>
          <div className="flex items-center gap-4 text-sm text-[#6D7380]">
            <span className="flex items-center gap-1">
              <img src="/images/date.svg" className="w-4 h-4" />
            </span>
            <span className="text-[#A4A9B3]">{post.date}</span>
          </div>
        </div>
        {/* ---------- Featured Image ---------- */}
        <div className="w-full rounded-xl overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.post_title}
            width={1200}
            height={700}
            className="w-full -py-20 object-cover"
          />
        </div>

        {/* ---------- CONTENT RENDER ---------- */}
        <article className="text-[#222] leading-[1.85] text-sm sm:text-[11px] md:text-[14px] lg:text-[16px]">
          {post.content.map((block, i) => {
            // PARAGRAPH ---------------------------
            if (block.type === "paragraph") {
              return (
                <p key={i} className="text-[#3A3F47]">
                  {block.text}
                </p>
              );
            }
            // SECOND PARAGRAPH  ---------------------        
            if (block.type === "second paragraph") {
              return (
                <p key={i} className="mt-4 text-[#3A3F47]">
                  {block.text}
                </p>
              );
            }

            // HEADING ---------------------------
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="pl-7 sm:pl-0 sm:text-[13px] md:text-[15px] lg:text-[18px] font-semibold text-[#0D1520] mt-8"
                >
                  <img src="/images/point.svg" className="hidden sm:inline-block mr-2" />
                  {block.text}
                </h2>
              );
            }

            // LIST ---------------------------
            if (block.type === "list" && block.items) {
              return (
                <ul key={i} className="list-disc ml-6 space-y-2 text-[#3A3F47]">
                  {block.items.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </article>
      </div>
      </MaxWidthWrapper>
    </section>
  );
}
