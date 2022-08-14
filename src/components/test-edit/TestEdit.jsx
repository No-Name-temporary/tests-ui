import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import TestForm from '../test-new/TestForm';

function TestEdit() {
  const { id } = useParams();

  const [configuration, setConfiguration] = useState({});

  const getTestHook = () => {
    const run = async () => {
      try {
        const testData = await apiClient.getTest({ id });
        setConfiguration(testData);
      } catch (err) {
        console.log(err);
      }
    };
    run();
  };

  useEffect(getTestHook, []);

  return (
    <div>
      <TestForm mode="edit" testId={id} configuration={configuration} />
    </div>
  );
}

export default TestEdit;
