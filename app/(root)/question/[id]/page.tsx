import AnswerForm from "@/components/forms/AnswerForm";
import AllAnswers from "@/components/shared/allAnswers/AllAnswers";
import ParseHTML from "@/components/shared/parseHTML/ParseHTML";
import Stat from "@/components/shared/stat/Stat";
import Tag from "@/components/shared/tag/Tag";
import Votes from "@/components/shared/votes/votes";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { getTimestamp, formatBigNumber } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: any) => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById(clerkId);
  }

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

          <div className="flex justify-end">
            <Votes
              type="Question"
              itemId={JSON.stringify(result._id)}
              userId={JSON.stringify(mongoUser._id)}
              upvotes={result.upvotes.length}
              hasUpvoted={result.upvotes.includes(mongoUser._id)}
              downvotes={result.downvotes.length}
              hasDownvoted={result.downvotes.includes(mongoUser._id)}
              hasSaved={mongoUser?.saved.includes(result._id)}
            />
          </div>
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

      <div className="mt-8 flex flex-wrap gap-2">
        {result.tags.map((tag: any) => (
          <Tag key={tag._id} id={tag._id} name={tag.name} showCount={false} />
        ))}
      </div>

      <AllAnswers
        questionId={result._id}
        userId={mongoUser?._id}
        totalAnswers={result.answers.length}
      />

      <AnswerForm
        question={result.content}
        questionId={JSON.stringify(result._id)}
        authorId={JSON.stringify(mongoUser?._id)}
      />
    </>
  );
};

export default Page;
