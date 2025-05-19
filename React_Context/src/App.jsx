import List from "./components/List";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="div">
        <div>
          <h1>My cool app</h1>
        </div>
        <ErrorBoundary>
          <List />
        </ErrorBoundary>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
