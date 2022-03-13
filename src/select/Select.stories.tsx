import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

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

Primary.args = {
  options,
  placeholder: 'Select:',
  block: false,
  disabled: false,
  error: '',
  hint: '',
  size: 's',
  arrow: true,
  visibleOptions: 3,
  defaultOpen: false,
  optionListWidth: 'field',
  label: 'Element',
  closeOnSelect: true,
  allowUnselect: true,
  multiple: false,
};
