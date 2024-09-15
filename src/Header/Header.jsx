import { Container } from "@mantine/core";
import { Button, ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconLayout, IconLayout2 } from "@tabler/icons-react";
import logo from "./logo.png";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className="p-4 border-b border-gray-200">
      <Container size="xl" className={classes.inner}>
        <div className="flex items-center gap-1">
          <div>
            <img src={logo} className="h-7 w-7" alt="logo" />
          </div>
          <h1 class="text-3xl font-bold">Tech Hive</h1>
        </div>
        <div className="flex gap-1">
          <Button variant="subtle">
            <IconLayout />
          </Button>
          <Button style={{ backgroundColor: '#FFE57E', color: 'black' }}>LOGIN/REGISTER</Button>
          <ActionIcon size="lg" variant="default">
            <IconDotsVertical size={18} />
          </ActionIcon>
        </div>
      </Container>
    </header>
  );
}
