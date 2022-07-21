import { React, useState } from 'react';

function TextBlockInput({
  label, placeholder, name, id,
}) {
  const [showTextarea, setShowTextArea] = useState(false);

  return (
    <div>
      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex">
        <div>
          <input type="radio" name="body" id="none" value="none" />
          <label htmlFor="none">None</label>
        </div>
        <div className="px-2">
          <input type="radio" name="body" id="json" value="json" checked />
          <label htmlFor="json">JSON</label>
        </div>

      </div>
      <div className="mt-1">
        <textarea
          rows={4}
          name={name}
          id={id}
          className="shadow-sm bg-gray-900 text-blue-500 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue={placeholder}
        />
      </div>
    </div>
  );
}

export default TextBlockInput;
