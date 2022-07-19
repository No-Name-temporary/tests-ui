import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateTest from './components/CreateTest';
import TestResults from './components/TestResults';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/tests/:id" element={<TestResults />} />
        <Route path="/create/test" element={<CreateTest />} />
      </Routes>
    </div>
  );
}

export default App;
