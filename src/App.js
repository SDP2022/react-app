import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import WelcomePage from "./routes/WelcomePage";
import WorkerPage from "./routes/WorkerPage";
import PlannerPage from "./routes/PlannerPage";
import TutorialPage from "./routes/TutorialPage";
import ManualControl from "./routes/ManualControl";





function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/worker" element={<WorkerPage/>} />
          <Route path="/planner" element={<PlannerPage/>} />
          <Route path="/tutorial" element={<TutorialPage/>} />
          <Route path="/manualcontrol" element={<ManualControl/>} />


        </Routes>
      </Layout>
    </div>
  );
}

export default App;
