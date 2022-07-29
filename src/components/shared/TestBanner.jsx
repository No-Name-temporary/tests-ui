import React from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../services/ApiClient';
import { formatDateLong } from '../../utils/helpers';
import Button from './Button';

function TestBanner({
  flagUrls,
  testData,
}) {
  const editedOnMarkup = () => {
    if (testData.updatedAt) {
      return (
        <>
          <span className="font-bold">Edited on:</span>
          {' '}
          {formatDateLong(testData.updatedAt)}
        </>
      );
    }
    return '';
  };

  const handleRunNowClick = (testId) => {
    apiClient.runTestNow(testId);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to={`/tests/${testData.id}`}>
            <h1 className="text-3xl font-bold text-gray-900">{testData.name}</h1>
          </Link>
          <div className="flex">
            { flagUrls.map((url) => <div className="w-6 ml-2" key={url}><img src={url} alt={url} /></div>) }
          </div>
        </div>
        <div className="justify-items-end flex">
          <div>
            <Button message="Edit" />
          </div>
          <div className="ml-2">
            <Button onClick={() => handleRunNowClick(testData.id)} message="Run now" />
          </div>
        </div>
      </div>
      <div className="text-gray-400">
        {testData.method ? testData.method.toUpperCase() : ''}
        {' '}
        {testData.url}
      </div>
      <div className="text-gray-400">
        <span className="font-bold">Created on:</span>
        {' '}
        { formatDateLong(testData.createdAt) }
        {' '}
        { editedOnMarkup() }
      </div>
    </div>
  );
}

export default TestBanner;
