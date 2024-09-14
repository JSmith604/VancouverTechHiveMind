import { Container } from "@mantine/core";
import { Button } from "@mantine/core";
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
          <h1 class="text-2xl font-bold">Tech Hive</h1>
        </div>
        <Button>Login</Button>
      </Container>
    </header>
  );
}
