import React from 'react';

function ResultCard({ label, value }) {
  return (
    <div>
      <div className="text-primary-700">{label}</div>
      <div className="text-primary-900 font-semibold text-xl">{value}</div>
    </div>
  );
}

export default ResultCard;
