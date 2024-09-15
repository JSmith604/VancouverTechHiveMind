import React from "react";
import { ActionIcon, Button } from "@mantine/core";
import { Job } from "./Job";
import jobs from "../data/jobs.json";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { IconFilter } from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react";

export function Jobs() {
  return (
    <div className="w-[500px] p-8 border-r border-gray-200">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold">Jobs</h1>
          <IconTriangleInvertedFilled size={12} />
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="light">LATEST</Button>
          <ActionIcon
            variant="white"
            size="lg"
            color="dark"
            aria-label="add feeds"
          >
            <IconFilter />
          </ActionIcon>
        </div>
      </div>
      <div>
        {jobs.map((job) => {
          return <Job key={job.url} job={job} />;
        })}
      </div>
    </div>
  );
}
