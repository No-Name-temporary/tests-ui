import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateTest from "./components/CreateTest";
import TestResults from "./components/TestResults";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/tests/:id" element={<TestResults />}></Route>
        <Route path="/create/test" element={<CreateTest />}></Route>
      </Routes>
    </div>
  );
}


export default App;
