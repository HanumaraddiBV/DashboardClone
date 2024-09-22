import { ThemeProvider } from "@emotion/react";
import TopBar from "./Components/navBar/TopBar";
import Dashboard from "./Pages/dashboard/Dashboard";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
          </main>
          {/* <Dashboard /> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
