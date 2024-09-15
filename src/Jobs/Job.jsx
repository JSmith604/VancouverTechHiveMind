import React from "react";
import { NavLink } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";

export function Job(props) {
  return (
    <NavLink
      p={"lg"}
      href={props.job.url}
      label={props.job.title}
      leftSection={<IconBriefcase color="gray" size={42} stroke={0.9} />}
    />
  );
}
