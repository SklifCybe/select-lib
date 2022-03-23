import React from 'react';
import ReactDOM from 'react-dom';

import { Select } from './select';

const options = [
  { key: '1', content: 'html' },
  { key: '2', content: 'css' },
  { key: '3', content: 'js' },
  { key: '4', content: 'ts' },
  { key: '5', content: 'deno' },
];

ReactDOM.render(
  <Select options={options} placeholder="Select: " />,
  document.getElementById('root'),
);
