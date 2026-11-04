import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ article }) {
  const { title, date, readTime, image, link } = article;

  return (
    <Link
      href={link || "#"}
      className="group flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 bg-[#f5f5f5] hover:bg-[#ededed] rounded-[16px] p-3 sm:p-3.5 transition-colors duration-300"
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-[210px] md:w-[230px] aspect-[16/10] sm:aspect-[1.9/1] rounded-[10px] overflow-hidden shrink-0 bg-[#e5e5e5]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 240px"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 py-1 pr-2 sm:pr-4">
        {/* Meta (Date • Read time) */}
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-[#5b5b5b]">
          <span>{date}</span>
          <span className="size-1 rounded-full bg-[#5b5b5b] inline-block shrink-0" />
          <span>{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 text-[17px] sm:text-[19px] lg:text-[20px] font-semibold text-[#05080c] leading-snug group-hover:text-black transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
