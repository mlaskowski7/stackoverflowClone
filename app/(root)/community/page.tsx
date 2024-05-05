import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/filter/Filter";
import React from "react";
import { UserFilters } from "@/constants/filters";

const page = () => {
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

      <section className="mt-12 flex flex-wrap gap-4"></section>
    </>
  );
};

export default page;
