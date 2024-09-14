import { createTheme, MantineProvider } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";
import "./App.css";
import { Header } from "./Header/Header";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
    </MantineProvider>
  );
}

export default App;
