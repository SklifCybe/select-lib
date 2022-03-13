import React, { FC } from 'react';
import cn from 'classnames';

import { ArrowProps } from '@/select/typings';

import { ReactComponent as ArrowIcon } from '@/select/assets/arrow-icon.svg';
import styles from './index.module.css';

const Arrow: FC<ArrowProps> = ({ visible, isDropdownOpen }) => {
  if (!visible) {
    return null;
  }

  return <ArrowIcon className={cn(isDropdownOpen ? styles.arrowUp : styles.arrowDown)} />;
};

export { Arrow };
