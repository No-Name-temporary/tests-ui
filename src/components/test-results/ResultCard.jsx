import React from 'react';

function ResultCard({ label, value }) {
  return (
    <div>
      <div className="text-heading-h5">{label}</div>
      <div className="text-heading-h4 font-semibold text-xl">{value}</div>
    </div>
  );
}

export default ResultCard;
