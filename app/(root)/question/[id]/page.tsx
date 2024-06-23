import ParseHTML from "@/components/shared/parseHTML/ParseHTML";
import Stat from "@/components/shared/stat/Stat";
import { getQuestionById } from "@/lib/actions/question.action";
import { getTimestamp, formatBigNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              className="rounded-full"
              width={70}
              height={70}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>

          <div className="flex justify-end">voting will be here</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Stat
          imgUrl={result.author.picture}
          alt="Post Author"
          value={result.author.name}
          title={` ${getTimestamp(result.createdAt)}`}
          href={`/profile/${result.author.id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
        <Stat
          imgUrl="/assets/icons/clock.svg"
          alt="clock png"
          value={` asked ${getTimestamp(result.createdAt)}`}
          title=""
          textStyles="small-medium text-dark400_light800"
        />
        <Stat
          imgUrl="/assets/icons/message.svg"
          alt="Answers"
          value={formatBigNumber(result.answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Stat
          imgUrl="/assets/icons/eye.svg"
          alt="Views"
          value={formatBigNumber(result.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>

      <ParseHTML data={result.content} />
    </>
  );
};

export default Page;