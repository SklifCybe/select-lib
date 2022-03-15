import React, { forwardRef } from 'react';
import cn from 'classnames';

import { SelectWrapperProps } from '@/select/typings';

import styles from './index.module.css';

const SelectWrapper = forwardRef<HTMLDivElement, SelectWrapperProps>((props, ref) => {
  const { children, block } = props;

  return (
    <div
      className={cn(styles.wrapper, block ? styles.wrapperBlock : styles.wrapperInline)}
      ref={ref}
      data-testid="select-wrapper"
      >
      {children}
    </div>
  );
});

export { SelectWrapper };
