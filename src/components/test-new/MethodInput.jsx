import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import TextSelect from '../shared/TextSelect';

function MethodInput({ method, setMethod }) {
  const httpMethods = useSelector((state) => state.sideloads.httpMethods);

  const handleSubmitNewMethod = (e) => {
    setMethod(e.target.value);
  };

  return (
    <div className="flex-none">
      <TextSelect onChange={handleSubmitNewMethod} label="Method" options={httpMethods} />
    </div>
  );
}

export default MethodInput;
