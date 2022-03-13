import React, { FC, useEffect, useRef } from 'react';
import cn from 'classnames';

import { DropdownItemProps } from '@/select/typings';
import { getSizeClass } from '@/select/utils/getSizeClass';

import styles from './index.module.css';

const DropdownItem: FC<DropdownItemProps> = ({
  option,
  onClick,
  activeKeys,
  size,
  isFullWidth,
  setHeight,
}) => {
  const itemRef = useRef<HTMLLIElement>(null);

  const handleClick = () => {
    onClick(option);
  };

  useEffect(() => {
    if (itemRef.current) {
      setHeight(itemRef.current.getBoundingClientRect().height);
    }
  }, [itemRef]);

  const activeCondition: boolean = activeKeys.includes(option.key);

  return (
    <li
      ref={itemRef}
      className={cn(styles.dropdownItem, getSizeClass(size), isFullWidth && styles.fullWidthItem)}
      onClick={handleClick}>
      <span className={styles.bull}>{activeCondition ? <>&bull;</> : <>&nbsp;</>}</span>
      <span className={styles.dropdownContent}>{option.content}</span>
    </li>
  );
};

export { DropdownItem };
