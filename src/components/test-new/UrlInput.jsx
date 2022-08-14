import { React } from 'react';
import TextInput from '../shared/TextInput';

function UrlInput({ url, setUrl }) {
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex-1 pl-4">
      <TextInput onChange={handleUrlChange} label="URL" placeholder="https://..." type="text" name="test_name" id="test_name" value={url} />
    </div>
  );
}

export default UrlInput;
