import { React, useState } from 'react';
import CodeInput from './CodeInput';

function TextBlockInput({
  requestBody, setRequestBody, label, placeholder, name, id,
}) {
  const [checkedOption, setCheckedOption] = useState('none');

  const handleToggleShowBody = (e) => {
    setCheckedOption(e.target.value);
  };

  return (
    <div className="mt-6 text-grey-700">
      <h4 className="text-heading-h4">{label}</h4>
      <div className="flex mt-1 mb-3">
        <div>
          <input className="text-primary-900 focus:ring-0" onChange={handleToggleShowBody} type="radio" name="body" id="none" value="none" checked={checkedOption === 'none'} />
          <label className="text-heading-h4 ml-2" htmlFor="none">None</label>
        </div>
        <div className="px-2">
          <input className="text-primary-900 focus:ring-0" onChange={handleToggleShowBody} type="radio" name="body" id="json" value="json" checked={checkedOption === 'json'} />
          <label className="text-heading-h4 ml-2" htmlFor="json">JSON</label>
        </div>
      </div>
      { checkedOption === 'json' ? <CodeInput requestBody={requestBody} setRequestBody={setRequestBody} /> : ''}
    </div>
  );
}

export default TextBlockInput;
