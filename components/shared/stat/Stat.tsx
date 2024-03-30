import Link from "next/link";
import Image from "next/image";
import React from "react";

interface StatProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Stat = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: StatProps) => {
  const statContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return isAuthor && href ? (
    <Link href={href} className="flex-center flex-wrap gap-1">
      {statContent}
    </Link>
  ) : (
    <div className="flex-center flex-wrap gap-1">{statContent}</div>
  );
};

export default Stat;
