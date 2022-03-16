import React, { FC, useState } from 'react';
import cn from 'classnames';

import { DropdownItem } from '@/select/components/DropdownItem';
import { DropdownProps } from '@/select/typings';

import styles from './index.module.css';

export const Dropdown: FC<DropdownProps> = ({
  options,
  onClick,
  visible,
  activeKeys,
  visibleOptions,
  size,
  optionListWidth,
}) => {
  const [height, setHeight] = useState(0);

  const setDropdownHeight = (height: number) => {
    setHeight(height);
  };

  const isFullWidth: boolean = optionListWidth === 'content';

  if (!visible) {
    return null;
  }

  return (
    <ul
      className={cn(styles.dropdown, isFullWidth && styles.fullWidthDropdown)}
      style={{ maxHeight: height * visibleOptions + 'px' }}>
      {options.map((option) => (
        <DropdownItem
          key={option.key}
          option={option}
          onClick={onClick}
          activeKeys={activeKeys}
          size={size}
          setHeight={setDropdownHeight}
        />
      ))}
    </ul>
  );
};