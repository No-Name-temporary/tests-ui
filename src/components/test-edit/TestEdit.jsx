import { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import CreateNewTest from '../test-new/CreateNewTest';

function TestEdit() {
  const { id } = useParams();

  const getTestHook = () => {
    const run = async () => {
      try {
        const testData = await apiClient.getTest({ id });
        console.log(testData);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestHook, []);

  return (
    <div>
      <CreateNewTest />
    </div>
  );
}

export default TestEdit;
