import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">What is on your mind?</h1>
      <div>
        <QuestionForm />
      </div>
    </div>
  );
};

export default Page;
