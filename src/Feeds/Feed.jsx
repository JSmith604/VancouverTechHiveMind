import React from "react";
import { NavLink } from "@mantine/core";

export function Feed(props) {
  return (
    <NavLink
      p={"lg"}
      href={props.feed.link}
      label={props.feed.name}
      leftSection={props.feed.icon}
    />
  );
}
