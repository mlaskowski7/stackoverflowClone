"use client";

import React from "react";
import { HomePageFilters as filters } from "@/constants/filters";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const activeFilter = "frequent";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((filter, index) => (
        <Button
          key={index}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${activeFilter === filter.value ? "bg-primary-100 text-primary-500 dark:bg-dark-400" : "bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-500"}`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
