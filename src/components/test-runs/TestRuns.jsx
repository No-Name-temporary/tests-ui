import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import { formatDateLong } from '../../utils/helpers';
import Button from '../shared/Button';
import Table from './Table';

function TestRuns() {
  const testId = useParams().id;
  const [testRuns, setTestRuns] = useState([]);
  const [testName, setTestName] = useState('');
  const [testHttpMethod, setTestHttpMethod] = useState('');
  const [testUrl, setTestUrl] = useState('');
  const [testCreatedAt, setTestCreatedAt] = useState('');
  const [testUpdatedAt, setTestUpdatedAt] = useState('');

  const flagUrls = () => {
    const urls = [];
    if (testRuns.length > 0) {
      testRuns.forEach((run) => {
        if (!urls.includes(run.regionFlagUrl)) {
          urls.push(run.regionFlagUrl);
        }
      });
    }
    return urls;
  };

  const editedOnMarkup = () => {
    if (testUpdatedAt) {
      return (
        <>
          <span className="font-bold">Edited on:</span>
          {' '}
          {formatDateLong(testUpdatedAt)}
        </>
      );
    }
    return '';
  };

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
        setTestName(testData.name);
        setTestHttpMethod(testData.method);
        setTestUrl(testData.url);
        setTestCreatedAt(testData.createdAt);
        setTestUpdatedAt(testData.updatedAt);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestRunsHook, []);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-900">{testName}</h1>
          <div className="flex">
            { flagUrls().map((url) => <div className="w-6 ml-2" key={url}><img src={url} alt={url} /></div>) }
          </div>
        </div>
        <div className="justify-items-end flex">
          <div>
            <Button message="Edit" />
          </div>
          <div className="ml-2">
            <Button message="Run now" />
          </div>
        </div>
      </div>
      <div className="text-gray-400">
        {testHttpMethod}
        {' '}
        {testUrl}
      </div>
      <div className="text-gray-400">
        <span className="font-bold">Created on:</span>
        {' '}
        { formatDateLong(testCreatedAt) }
        {' '}
        { editedOnMarkup() }
      </div>
      <Table testRuns={testRuns} />
    </div>
  );
}

export default TestRuns;
