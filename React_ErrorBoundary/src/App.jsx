import List from "./components/List";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="div">
      <div>
        <h1>My cool app</h1>
      </div>
      <ErrorBoundary>
        <List />
      </ErrorBoundary>
    </div>
  );
}

export default App;
