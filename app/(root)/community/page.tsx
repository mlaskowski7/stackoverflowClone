import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import React from "react";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import UserCard from "@/components/cards/UserCard";

const Page = async () => {
  const result = await getAllUsers({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for a particular user..."
          otherClasses="flex-1"
        />{" "}
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((u) => <UserCard key={u._id} user={u} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users here</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
              Register yourself
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
