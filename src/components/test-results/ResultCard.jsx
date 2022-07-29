import React from 'react';

function ResultCard({ label, value }) {
  return (
    <div>
      <div className="text-gray-400">{label}</div>
      <div className="text-grey-900 font-semibold text-xl">{value}</div>
    </div>
  );
}

export default ResultCard;
