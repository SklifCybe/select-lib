import { render, screen } from '@testing-library/react';

import { SubInput } from '.';

const ERROR = 'some error text';
const HINT = 'some hint text';

describe('Subinput', () => {
  it('should return null', () => {
    const { container } = render(<SubInput />);
    expect(container.firstChild).toBeNull();
  });

  it('renders with error text', () => {
    render(<SubInput error={ERROR} />);
    const errorObject = screen.getByText(ERROR);

    expect(errorObject).toBeInTheDocument();
    expect(errorObject).toHaveClass('error');
  });

  it('renders with hint text', () => {
    render(<SubInput hint={HINT} />);
    const hintObject = screen.getByText(HINT);

    expect(hintObject).toBeInTheDocument();
    expect(hintObject).toHaveClass('hint');
  });

  it('error should have increase priority than hint', () => {
    render(<SubInput error={ERROR} hint={HINT} />);
    const errorObject = screen.getByText(ERROR);
    const hintObject = screen.queryByText(HINT);

    expect(errorObject).toBeInTheDocument();
    expect(errorObject).toHaveClass('error');
    
    expect(hintObject).toBeNull;
  });
});
