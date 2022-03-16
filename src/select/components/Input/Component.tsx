import React, { FC } from 'react';
import cn from 'classnames';

import { Arrow } from '@/select/components/Arrow';
import { getSizeClass } from '@/select/utils/getSizeClass';
import { InputProps } from '@/select/typings';

import styles from './index.module.css';

const Input: FC<InputProps> = ({
  children,
  size,
  error,
  handleInputClick,
  visibleArrow,
  isDropdownOpen,
  label,
  disabled,
}) => {
  return (
    <div
      data-testid="input-wrapper"
      className={cn(
        styles.component,
        error && styles.componentError,
        getSizeClass(size),
        disabled && styles.disabledInput,
      )}
      onClick={handleInputClick}>
      <div>
        <div className={styles.subtitle}>{label}</div>
        <div>{children}</div>
      </div>
      <Arrow visible={visibleArrow} isDropdownOpen={isDropdownOpen} />
    </div>
  );
};

export { Input };
