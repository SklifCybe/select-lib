import { render, screen } from '@testing-library/react';

import { Arrow } from '.';

const ARROW_ICON = 'arrow-icon';

describe('Arrow component', () => {
  it('should return null', () => {
    render(<Arrow visible={false} isDropdownOpen={false}/>);
    const arrowIcon = screen.queryByTestId(ARROW_ICON);
    expect(arrowIcon).toBeNull();
  })

  it('should have the arrowUp css class', () => {
    render(<Arrow visible={true} isDropdownOpen={true}/>);
    const arrowIcon = screen.getByTestId(ARROW_ICON);
    expect(arrowIcon).toHaveClass('arrowUp');
  })

  it('should have the arrowDown css class', () => {
    render(<Arrow visible={true} isDropdownOpen={false}/>);
    const arrowIcon = screen.getByTestId(ARROW_ICON);
    expect(arrowIcon).toHaveClass('arrowDown');
  })
});
