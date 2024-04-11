import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import NoResults from "@/components/shared/NoResults/NoResults";
import Filter from "@/components/shared/filter/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

const questions = [
  {
    id: "q123",
    title: "How can I improve my coding skills?",
    tags: [
      { id: "t1", name: "Programming" },
      { id: "t2", name: "Coding" },
      { id: "t3", name: "Skills Improvement" },
    ],
    author: {
      id: "a123",
      name: "Jane Doe",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 150000,
    views: 50000000,
    answers: [],
    createdAt: "2024-03-30T10:00:00.000Z",
  },

  {
    id: "q124",
    title: "What are the best practices for REST API development?",
    tags: [
      { id: "t4", name: "API" },
      { id: "t5", name: "REST" },
      { id: "t6", name: "Best Practices" },
    ],
    author: {
      id: "a124",
      name: "John Smith",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 25,
    views: 4000,
    answers: [],
    createdAt: "2022-03-29T09:30:00.000Z",
  },
  {
    id: "q125",
    title: "How to manage state in React applications?",
    tags: [
      { id: "t7", name: "React" },
      { id: "t8", name: "State Management" },
      { id: "t9", name: "Frontend Development" },
    ],
    author: {
      id: "a125",
      name: "Alex Johnson",
      picture: "/assets/icons/avatar.svg",
    },
    upvotes: 40,
    views: 300,
    answers: [],
    createdAt: "2024-03-28T08:20:00.000Z",
  },
];

export default async function Home() {
  const result = await getQuestions({});
  console.log(result);

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />{" "}
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={new Date(question.createdAt)}
            />
          ))
        ) : (
          <NoResults
            title="There are no questions at the moment"
            link="/ask-question"
            button="Click to ask a Question"
          />
        )}
      </div>
    </>
  );
}
