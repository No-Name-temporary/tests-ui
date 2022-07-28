import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestRuns from '../../entities/TestRuns';
import apiClient from '../../services/ApiClient';
import { flagUrls, testRunsCompletedAtDifference } from '../../utils/helpers';
import TestBanner from '../shared/TestBanner';
import TestRunsTable from '../shared/TestRunsTable';
import ResultCards from './ResultCards';

const RUNS_TO_DISPLAY = 3;

function TestResults() {
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

  const processTestRunDataSummary = (runs) => {
    const runsEntity = new TestRuns(runs);
    runsEntity.process();
    return runsEntity.summary();
  };

  const getTestRunsHook = () => {
    const run = async () => {
      try {
        const testData = await apiClient.getTestRuns({ testId });
        addAssertionCountsAndSetRuns(testData.runs);
        const {
          name, method, url, createdAt, updatedAt,
        } = testData;
        setTestBannerData({
          name, method, url, createdAt, updatedAt,
        });
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestRunsHook, []);

  const mostRecentTestRuns = ({ testRuns, count }) => testRuns.sort(
    testRunsCompletedAtDifference,
  ).slice(0, count);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <TestBanner
        testData={testBannerData}
        flagUrls={flagUrls(testRuns)}
      />
      <ResultCards summaryData={processTestRunDataSummary(testRuns)} />
      <div className="flex items-center mb-1">
        <h1 className="mr-5 text-xl font-bold text-gray-900">{`Last ${RUNS_TO_DISPLAY} results`}</h1>
        <Link to={`/tests/${testId}/runs`}>
          <div className="text-sky-600 hover:text-sky-700">See all test runs</div>
        </Link>
      </div>
      <TestRunsTable testRuns={mostRecentTestRuns({ testRuns, count: RUNS_TO_DISPLAY })} />
    </div>
  );
}

export default TestResults;
