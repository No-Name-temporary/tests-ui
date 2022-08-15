import { React } from 'react';
import TextInput from '../shared/TextInput';

const validationURL = {
  required: true,
  minLength: '1',
  pattern: '^http[s]?:\/\/(www\.)?(.*)?\/?(.)*',
};

function UrlInput({ url, setUrl }) {
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex-1 pl-4">
      <TextInput onChange={handleUrlChange} label="URL" placeholder="https://..." type="text" name="test_name" id="test_name" value={url} validation={validationURL} />
    </div>
  );
}

export default UrlInput;
