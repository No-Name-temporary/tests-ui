import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateTest from './components/CreateTest';
import CreateNewTest from './components/test-new/CreateNewTest';
import TestResults from './components/test-results/TestResults';
import TestRuns from './components/test-runs/TestRuns';
import Header from './components/Header';
import Tests from './components/tests/Tests';
import TestRun from './components/test-run/TestRun';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/tests/:testId/runs/:runId" element={<TestRun />} />
          <Route path="/tests/:id/runs" element={<TestRuns />} />
          <Route path="/tests/:id/results" element={<TestResults />} />
          <Route path="/tests/new" element={<CreateNewTest />} />
          <Route path="/tests/:id" element={<TestResults />} />
          <Route path="/create/test" element={<CreateTest />} />
          <Route path="/tests" element={<Tests />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
