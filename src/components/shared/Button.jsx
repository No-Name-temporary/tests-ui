import { React } from 'react';

function Button({ message, save = false, onClick }) {
  return (
    <button onClick={onClick} type="button" className={`${save ? 'bg-button-still hover:bg-button-hover text-white w-full' : 'hover:bg-gray-300'} px-4 py-1 text-sm font-semibold rounded border text-primary-900`}>
      { message }
    </button>
  );
}

export default Button;
