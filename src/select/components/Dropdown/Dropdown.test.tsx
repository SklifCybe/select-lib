import { render, screen } from '@testing-library/react';

import { Dropdown } from '.';
import { OptionShape, DropdownProps } from '@/select/typings';

const options: Array<OptionShape> = [
  { key: '1', content: 'HTML' },
  { key: '2', content: 'CSS' },
  { key: '3', content: 'JS' },
  { key: '4', content: 'TS' },
  { key: '5', content: 'NODEJS' },
  { key: '6', content: 'DENO' },
];
const fullDropdownClass = 'fullWidthDropdown';

const props: DropdownProps = {
  options,
  onClick: jest.fn(),
  visible: true,
  activeKeys: [],
  visibleOptions: 5,
  size: 'm',
  optionListWidth: 'content',
}

describe('Dropdown component', () => {
  it('should return null if visible equal false', () => {
    render(
      <Dropdown
        {...props}
        visible={false}
      />,
    );

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('dropdown width should have a full css class', () => { 
    render(
      <Dropdown
        {...props}
      />,
    );
    
    expect(screen.getByRole('list')).toHaveClass(fullDropdownClass);
  })

  it('dropdown width should be field', () => {
    render(
      <Dropdown
        {...props}
        optionListWidth={'field'}
      />,
    );
    
    expect(screen.getByRole('list')).not.toHaveClass(fullDropdownClass);
  })
});
