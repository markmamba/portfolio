import "./App.css";
import Portfolio from "./page/Portfolio";
import ProjectDetails from "./page/ProjectDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              {" "}
              {/* style={{backgroundColor: 'rgb(33, 42, 62)'}}>*/}
              <Portfolio />
            </div>
          }
        />
        <Route
          path="/project/:id"
          element={
            <div style={{ backgroundColor: "rgb(33, 42, 62)" }}>
              <ProjectDetails />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
