import React from 'react';
import { JSONTree } from 'react-json-tree';
import theme from '../../constants/jsonTreeTheme';

function Body({ body }) {
  return (
    <JSONTree data={body} theme={theme} invertTheme={false} />
  );
}

export default Body;
