import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../tag/Tag";

const RightSidebar = () => {
  const topQuestions = [
    {
      id: "1",
      title: "How do I use express as a custom server in NextJS?",
    },
    {
      id: "2",
      title: "Is it only me or the font is bolder than necessary?",
    },
    {
      id: "3",
      title: "Can I get the course for free?",
    },
    {
      id: "4",
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      id: "5",
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const hotTags = [
    {
      id: "1",
      name: "javascript",
      questionsNumber: 5,
    },
    {
      id: "2",
      name: "react",
      questionsNumber: 4,
    },
    {
      id: "3",
      name: "java",
      questionsNumber: 3,
    },
    {
      id: "4",
      name: ".NET",
      questionsNumber: 2,
    },
    {
      id: "5",
      name: "machine-learning",
      questionsNumber: 1,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question.id}`}
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Hot Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {hotTags.map((tag) => (
            <Tag
              key={tag.id}
              id={tag.id}
              name={tag.name}
              questionsNumber={tag.questionsNumber}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
