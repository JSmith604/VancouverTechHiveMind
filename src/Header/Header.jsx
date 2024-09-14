import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "./logo.svg";
import classes from "./Header.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function Header() {
  return (
    <header className="p-4">
      <Container size="xl" className={classes.inner}>
        <div className="flex">
          <img src={logo} className="h-9 w-9" alt="logo" />
          <h1 class="text-2xl font-bold">Tech Hive</h1>
        </div>
        <Button>Login</Button>
      </Container>
    </header>
  );
}
