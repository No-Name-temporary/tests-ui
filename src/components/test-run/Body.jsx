import React from 'react';
import { JSONTree } from 'react-json-tree';
import theme from '../../constants/jsonTreeTheme';

function Body({ body }) {
  return (
    <JSONTree
      data={body}
      theme={{
        extend: theme,
        tree: {
          borderRadius: '6px',
          padding: '1em',
        },
      }}
      invertTheme={false}
    />
  );
}

export default Body;
