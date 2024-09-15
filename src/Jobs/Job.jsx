import React from "react";
import { ActionIcon, NavLink } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { IconShare } from "@tabler/icons-react";

export function Job(props) {
  return (
    <NavLink
      className="shadow-sm rounded mb-4"
      p={"lg"}
      href={props.job.url}
      label={
        <div className="flex justify-between gap-2">
          <div>
            <div className="text-sm font-bold uppercase">{props.job.title}</div>
            <div className="text-sm">{props.job.payRange}</div>
          </div>
          <div>
            <div className="text-sm">{props.job.company}</div>
            <div className="text-sm">{props.job.postDate}</div>
          </div>
          <div>
            <ActionIcon variant="white" color="dark">
              <IconShare />
            </ActionIcon>
          </div>
        </div>
      }
      leftSection={<IconBriefcase color="gray" size={42} stroke={0.9} />}
    />
  );
}
