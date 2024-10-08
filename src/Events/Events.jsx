import React from "react";
import { Event } from "./Event";
import { Button, ActionIcon } from "@mantine/core";
import { IconTriangleInvertedFilled, IconFilter } from "@tabler/icons-react";

const events = [
  {
    id: 1,
    name: "BEGINNERS: TECHNICAL SEO WORKSHOP",
    description: "Learn how to optimize your website for search engines.",
  },
  {
    id: 2,
    name: "INTERMEDIATE: TECHNICAL SEO WORKSHOP ",
    description:
      "Learn how to optimize your website for search engines with intermediate techniques.",
  },
  {
    id: 3,
    name: "ADVANCED: TECHNICAL SEO WORKSHOP ",
    description:
      "Learn how to optimize your website for search engines with advanced techniques.",
  },
];

export function Events() {
  return (
    <div className="w-[400px] p-8">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <h1 className="text-2xl font-bold">Events</h1>
          <IconTriangleInvertedFilled size={12} />
        </div>
        <div className="flex gap-2 items-center">
          <Button variant="light">POPULAR</Button>
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
        {events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
}
