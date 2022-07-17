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
          {options.map((option) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={`${option.displayedName}${option.id}`} value={option.value}>{option.displayedName}</option>
          ))}
        </select>
      </dd>
    </div>
  );
}

export default Dropdown;
