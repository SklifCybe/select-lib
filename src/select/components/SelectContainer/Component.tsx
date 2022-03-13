import React, { forwardRef } from 'react';
import cn from 'classnames';

import { SelectContainerProps } from '@/select/typings';

import styles from './index.module.css';

const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>((props, ref) => {
  const { children, block } = props;

  return (
    <div
      className={cn(styles.wrapper, block ? styles.wrapperBlock : styles.wrapperInline)}
      ref={ref}>
      {children}
    </div>
  );
});

export { SelectContainer };
