import List from "./components/List";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="div">
        <div>
          <Header>
            <h1>My cool app</h1>
          </Header>
          <ToggleButton theme={theme} onClick={handleClick} />
        </div>
        <ErrorBoundary>
          <List />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
