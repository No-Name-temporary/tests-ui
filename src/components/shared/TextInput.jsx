import { React } from 'react';

function TextInput({
  label, placeholder, type, name, id, value, onChange, onBlur, validation
}) {
  return (
    <div>
      <label htmlFor="text" className="block text-heading-h4">
        { label }
      </label>
      <div className="mt-1 text-input-placeholder">
        <input
          type={type}
          name={name}
          id={id}
          className="text-input-value shadow-sm focus:ring-slate-500 focus:border-slate-500 block w-full sm:text-sm border-slate-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
					required={validation?validation.required:''}
					min={validation?validation.min:''}
					pattern={validation?validation.pattern:""}
        />
      </div>
    </div>
  );
}

export default TextInput;
