import React from "react";
import { ActionIcon } from "@mantine/core";
import { Feed } from "./Feed";
import { IconLayoutGridAdd } from "@tabler/icons-react";
import { IconBriefcase } from "@tabler/icons-react";
import { IconSeeding } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconNews } from "@tabler/icons-react";
import { IconBuilding } from "@tabler/icons-react";
import { IconHammer } from "@tabler/icons-react";
import map from "./map.png";

const feeds = [
  {
    id: 1,
    name: "Vancouver Jobs",
    icon: <IconBriefcase />,
  },
  {
    id: 2,
    name: "Vancouver Startups",
    icon: <IconSeeding />,
  },
  {
    id: 3,
    name: "Vancouver Events",
    icon: <IconCalendarEvent />,
  },
  {
    id: 4,
    name: "Vancouver News",
    icon: <IconNews />,
  },
  {
    id: 5,
    name: "Vancouver Hackathon",
    icon: <IconHammer />,
  },
  {
    id: 6,
    name: "Vancouver Tech Companies",
    icon: <IconBuilding />,
  },
];

export function Feeds() {
  return (
    <div className="w-[400px] p-8 border-r border-gray-200">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Feeds</h1>
        <ActionIcon variant="transparent" color="dark" aria-label="add feeds">
          <IconLayoutGridAdd />
        </ActionIcon>
      </div>
      <div>
        {feeds.map((feed) => {
          return <Feed key={feed.id} feed={feed} />;
        })}
      </div>
      <div className="mt-4">
        <img src={map} alt="map" />
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-bold">Vancouver, BC, Canada</h2>
      </div>
    </div>
  );
}
