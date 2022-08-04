import { React } from 'react';
// import { useDispatch } from 'react-redux';
// delete HeaderRow

function HeaderRow({ }) {
  return (
    <tr>
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500" placeholder="X-My-Header" />
      <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500" placeholder="Value" />
      <td>
        <button type="button" className="pl-2">
          <img
            className="h-6 w-auto"
            src="https://img.icons8.com/external-others-iconmarket/344/external-delete-essential-others-iconmarket-3.png"
            alt="NoName"
          />
        </button>
      </td>
    </tr>
  );
}

export default HeaderRow;
