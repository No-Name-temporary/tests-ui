/* eslint-disable react/prop-types */
import React from 'react';

function Dropdown({
  label, value, options, onChange,
}) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        <select value={value} onChange={onChange}>
          {options.map((option, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={idx} value={option.value}>{option.value}</option>
          ))}
        </select>
      </dd>
    </div>
  );
}

export default Dropdown;
