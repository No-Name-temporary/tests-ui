import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TestsResults from "./components/TestsResults";
import CreateTest from "./components/CreateTest";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/TestsResults" element={<TestsResults />}></Route>
        <Route path="/CreateTest" element={<CreateTest />}></Route>
      </Routes>
    </div>
  );
}


export default App;
