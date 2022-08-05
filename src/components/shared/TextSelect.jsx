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
      <div className="text-input-value">
        <label htmlFor="text" className="block text-heading-h4">
          { label }
        </label>
        <div className="mt-1">
          <select
            name={name}
            id={id}
            className="shadow-sm focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-slate-300 rounded-md"
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
