import React from 'react';
import ResultCard from './ResultCard';

function ResultCards({ summaryData }) {
  if (summaryData) {
    return (
      <div className="flex mb-8">
        <div className="mr-8">
          <h3 className="text-heading-h3 font-semibold text-lg">Monitoring results</h3>
          <ResultCard label="Availability" value={`${Math.round(summaryData.availability * 100) / 100}%`} />
        </div>
        <div className="mr-8">
          <h3 className="text-heading-h3 font-semibold text-lg">Alerts</h3>
          <ResultCard label="Failures" value={`${summaryData.runsWithFailedAssertions}`} />
        </div>
        <div className="mr-8">
          <h3 className="text-heading-h3 font-semibold text-lg">Performance</h3>
          <div className="flex">
            <div className="mr-4">
              <ResultCard label="P50" value={`${summaryData.responseTimeP50} ms`} />
            </div>
            <div className="mr-4">
              <ResultCard label="P95" value={`${summaryData.responseTimeP95} ms`} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultCards;
