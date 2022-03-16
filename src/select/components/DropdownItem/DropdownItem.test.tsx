import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownItem } from '.';

import { DropdownItemProps } from '@/select/typings';

const props: DropdownItemProps = {
  activeKeys: [],
  isFullWidth: true,
  onClick: jest.fn(),
  option: { key: '1', content: 'html' },
  setHeight: jest.fn(),
  size: 's',
};
const fullWidthItem = 'fullWidthItem';

describe('DropdownItem component', () => {
  it('handleClick works', () => {
    const { onClick } = props;
    render(<DropdownItem {...props} />);

    const listItem = screen.getByRole('listitem');
    userEvent.click(listItem);

    expect(onClick).toBeCalled();
  });

  it('should have fullWidth css class', () => {
    render(<DropdownItem {...props} isFullWidth={true} />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toHaveClass(fullWidthItem);
  });

  it('should not contain fullWidth css class', () => {
    render(<DropdownItem {...props} isFullWidth={false} />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).not.toHaveClass(fullWidthItem);
  });

  it('should have content message and currect css class', () => {
    const {
      option: { content },
    } = props;
    render(<DropdownItem {...props} isFullWidth={false} />);

    const contentBlock = screen.getByText(content);

    expect(contentBlock).toBeInTheDocument();
    expect(contentBlock).toHaveClass('dropdownContent');
  });
});
