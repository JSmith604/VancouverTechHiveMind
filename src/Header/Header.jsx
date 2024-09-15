import { Container } from "@mantine/core";
import { Button, ActionIcon } from "@mantine/core";
import { IconDotsVertical, IconLayout, IconLayout2 } from "@tabler/icons-react";
import logo from "./logo.png";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className="p-4 border-b border-gray-200 flex justify-between items-center px-8">
      <div className="flex items-center gap-1">
        <div>
          <img src={logo} className="h-7 w-7" alt="logo" />
        </div>
        <h1 class="text-2xl font-bold">Tech Hive</h1>
      </div>
      <div className="flex gap-2">
        <div className="text-right">
          <p className="text-gray-600 font-bold hover:text-blue-500 transition-colors text-sm">Vancouver, Canada</p>
          <p className="text-gray-600 hover:text-blue-500 transition-colors text-xs underline">Change city</p>
        </div>
        <Button variant="default" style={{ width: 'auto', padding: '0.5rem' }}>
          <IconLayout className="text-gray-600 hover:text-blue-500 transition-colors" />
        </Button>
        <Button style={{ backgroundColor: '#FFE57E', color: 'black', fontSize: '11px' }}>LOGIN / REGISTER</Button>
        <ActionIcon size="lg" variant="default">
          <IconDotsVertical size={18} />
        </ActionIcon>
      </div>
    </header>
  );
}
