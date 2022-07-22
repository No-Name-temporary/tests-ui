import { React } from 'react';

function CodeInput({}) {
  return (
    <div className="mt-1">
      <textarea
        rows={4}
        className="shadow-sm bg-gray-900 text-blue-500 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
        defaultValue="...JSON (this isn't connected yet!)"
      />
    </div>
  );
}

export default CodeInput;
