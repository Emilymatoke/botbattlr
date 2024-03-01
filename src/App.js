import React from "react";
import ReactDOM from "react-dom";
import BotsPage from "./components/BotsPage";

ReactDOM.render(<App />, document.getElementById("root"));
function App() {
  return (
    <div className="App">
      <BotsPage />
    </div>
  );
}

export default App;