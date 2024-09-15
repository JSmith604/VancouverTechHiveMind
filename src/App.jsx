import { createTheme, MantineProvider } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";
import "./App.css";
import { Header } from "./Header/Header";
import { Feeds } from "./Feeds/Feeds";
import { Jobs } from "./Jobs/Jobs";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <main className="flex">
        <div>
          <Feeds />
        </div>
        <div>
          <Jobs />
        </div>
      </main>
    </MantineProvider>
  );
}

export default App;
