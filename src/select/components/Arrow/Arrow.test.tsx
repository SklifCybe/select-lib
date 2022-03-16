import { render, screen } from '@testing-library/react';

import { Arrow } from '.';

const ARROW_ICON = 'arrow-icon';
const ARROW_UP_CLASS = 'arrowUp';
const ARROW_DOWN_CLASS = 'arrowDown';

describe('Arrow component', () => {
  it('should return null', () => {
    render(<Arrow visible={false} isDropdownOpen={false}/>);
    const arrowIcon = screen.queryByTestId(ARROW_ICON);

    expect(arrowIcon).toBeNull();
  })

  it('should have the arrowUp css class', () => {
    render(<Arrow visible={true} isDropdownOpen={true}/>);
    const arrowIcon = screen.getByTestId(ARROW_ICON);

    expect(arrowIcon).toHaveClass(ARROW_UP_CLASS);
    expect(arrowIcon).not.toHaveClass(ARROW_DOWN_CLASS);
  })

  it('should have the arrowDown css class', () => {
    render(<Arrow visible={true} isDropdownOpen={false}/>);
    const arrowIcon = screen.getByTestId(ARROW_ICON);

    expect(arrowIcon).toHaveClass(ARROW_DOWN_CLASS);
    expect(arrowIcon).not.toHaveClass(ARROW_UP_CLASS);
  })
});
