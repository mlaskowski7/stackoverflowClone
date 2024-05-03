import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";

import React from "react";

const Page = async () => {
  // const { userId } = auth();

  const userId = "12345";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById(userId);

  console.log(mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">What is on your mind?</h1>
      <div>
        <QuestionForm mongoUserId={JSON.stringify(mongoUser)} />
      </div>
    </div>
  );
};

export default Page;
