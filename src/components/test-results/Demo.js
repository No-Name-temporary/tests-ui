import { useLayoutEffect, useRef, useState } from 'react';

export default function Demo() {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <h2>
        Width:
        {' '}
        {width}
      </h2>
    </div>
  );
}
