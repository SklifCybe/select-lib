import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';
import { InputProps } from '@/select/typings';

const handleInputClick = jest.fn();

const CHILDRENS = 'some childrens';
const LABEL = 'some label';

const defaultProps: InputProps = {
  children: CHILDRENS,
  size: 's',
  handleInputClick,
  isDropdownOpen: true,
  visibleArrow: true,
  disabled: false,
  error: '',
  label: '',
};

describe('Input component', () => {
  it('should have some childrens', () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByText(CHILDRENS)).toBeInTheDocument();
  });

  it('should have some label and have currectly css class', () => {
    render(<Input {...defaultProps} label="some label" />);

    expect(screen.getByText(LABEL)).toBeInTheDocument();
    expect(screen.getByText(LABEL)).toHaveClass('subtitle');
  });

  it('should contain Arrow', () => {
    render(<Input {...defaultProps} />);

    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('should not contain Arrow', () => {
    render(<Input {...defaultProps} visibleArrow={false} />);

    expect(screen.queryByTestId('arrow-icon')).toBeNull();
  });

  it('should call onClick event', () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByTestId('input-wrapper');
    userEvent.click(input);

    expect(handleInputClick).toHaveBeenCalled();
  });

  it('should works disabled props', () => {
    render(<Input {...defaultProps} disabled={true} />);

    const input = screen.getByTestId('input-wrapper');

    expect(input).toHaveClass('disabledInput');
  });

  it('should works without disabled props', () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByTestId('input-wrapper');

    expect(input).not.toHaveClass('disabledInput');
  });

  it('should have error css class', () => {
    render(<Input {...defaultProps} error="some error" />);

    const input = screen.getByTestId('input-wrapper');
    expect(input).toHaveClass('componentError');
  });

  it('should not contain error css class', () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByTestId('input-wrapper');
    expect(input).not.toHaveClass('componentError');
  });
});
