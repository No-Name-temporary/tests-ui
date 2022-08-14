import React from 'react';
import TextInput from '../shared/TextInput';

function NameInput({ mode, title, setTitle }) {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  if (mode === 'create') {
    return (
      <TextInput onChange={handleTitleChange} label="Test name" placeholder="My-new-test" type="text" name="test_name" id="test_name" value={title} />
    );
  }
}

export default NameInput;
