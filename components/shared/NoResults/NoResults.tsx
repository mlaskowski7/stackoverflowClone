import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NoResultsProps {
  title: string;
  link: string;
  button: string;
}

const NoResults = ({ title, link, button }: NoResultsProps) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No questions image"
        width={270}
        height={200}
        className="flex object-contain dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        alt="No questions image"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <Link href={link}>
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          {button}
        </Button>
      </Link>
    </div>
  );
};

export default NoResults;
