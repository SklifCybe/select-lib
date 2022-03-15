import { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { useClickOutside } from '.';

describe('useClickOutside', () => {
  it('renders', () => {
    const myRef = createRef<HTMLElement>();
    const callback = (isOpen: boolean) => {};

    renderHook(() => useClickOutside(myRef, callback));
  });
});
