import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import {
  flagUrls, objectsCreatedAtDifference, run1BeforeRun2, testRunsCompletedAtDifference,
} from '../../utils/helpers';
import TestBanner from '../shared/TestBanner';
import TestRunsTable from '../shared/TestRunsTable';

function TestRuns() {
  const testId = useParams().id;
  const [testRuns, setTestRuns] = useState([]);
  const [testBannerData, setTestBannerData] = useState({});

  const addAssertionCountsAndSetRuns = (runs) => {
    const shapedRuns = runs.map((run) => {
      const assertionsTotalCount = run.assertions.length;
      const assertionsPassedCount = run.assertions.filter((a) => a.success).length;
      return { ...run, assertionsTotalCount, assertionsPassedCount };
    });
    setTestRuns(shapedRuns);
  };

  const getTestRunsHook = () => {
    const run = async () => {
      try {
        const testData = await apiClient.getTestRuns({ testId });
        addAssertionCountsAndSetRuns(testData.runs);
        const {
          id, name, method, url, createdAt, updatedAt,
        } = testData;
        setTestBannerData({
          id, name, method, url, createdAt, updatedAt,
        });
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestRunsHook, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <TestBanner
        testData={testBannerData}
        flagUrls={flagUrls(testRuns)}
      />
      <div className="flex items-center mb-1">
        <h1 className="mr-5 text-xl font-bold text-primary-900">Test runs</h1>
      </div>
      <TestRunsTable testRuns={testRuns.sort(testRunsCompletedAtDifference)} />
    </div>
  );
}

export default TestRuns;
