import React from 'react';
import ReactDOM from 'react-dom'

import { Select } from './select/Component'

const options = [
  { key: '1', content: 'HTML' },
  { key: '2', content: 'CSS' },
  { key: '3', content: 'JavaScript' },
  { key: '4', content: 'TypeScript' },
  { key: '5', content: 'React' },
  { key: '6', content: 'Redux' },
  { key: '7', content: 'MobX' },
  { key: '8', content: 'NodeJS' },
  { key: '9', content: 'Express' },
];

const props = {
  options,
  placeholder: 'Select:',
};


ReactDOM.render(<Select {...props}/> , document.getElementById('root'))