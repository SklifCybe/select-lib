import { createRef } from 'react';
import { render, screen } from '@testing-library/react';

import { SelectWrapper } from '.';

const CHILDRENS = 'some childrens';

describe('SelectWrapper component', () => {
  const myRef = createRef<HTMLDivElement>();
  it('should have some childrens', () => {
    render(<SelectWrapper ref={myRef} children={CHILDRENS} />);

    expect(screen.getByText(CHILDRENS)).toBeInTheDocument();
  });

  it('should have currectly css class, with active block props', () => {
    render(<SelectWrapper ref={myRef} children={CHILDRENS} block={true} />);

    expect(screen.getByTestId('select-wrapper')).toHaveClass('wrapper');
    expect(screen.getByTestId('select-wrapper')).toHaveClass('wrapperBlock');
  });

  it('should have currectly css class, without block props', () => {
    render(<SelectWrapper ref={myRef} children={CHILDRENS} />);

    expect(screen.getByTestId('select-wrapper')).toHaveClass('wrapper');
    expect(screen.getByTestId('select-wrapper')).toHaveClass('wrapperInline');
  });

  it('should have currectly ref', () => {
    render(<SelectWrapper ref={myRef} children={CHILDRENS} />);

    expect(myRef.current).toBe(screen.getByTestId('select-wrapper'));
  });
});
