import { React } from 'react';

function Select({
  label, placeholder, name, id, options, onChange,
}) {
  const optionValue = (opt) => {
    if (opt.value) {
      return opt.value;
    }
    return opt.name;
  };

  if (options) {
    return (
      <div className="text-label-input">
        <label htmlFor="text" className="block">
          { label }
        </label>
        <div className="mt-1 text-label-input">
          <select
            name={name}
            id={id}
            className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
            onChange={onChange}
          >
            { options.map((opt) => <option value={optionValue(opt)}>{opt.displayName}</option>) }
          </select>
        </div>
      </div>
    );
  }
}

export default Select;
