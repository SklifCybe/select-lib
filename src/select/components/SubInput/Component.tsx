import React, { FC } from 'react';
import cn from 'classnames';

import { SubInputProps } from '@/select/typings';

import styles from './index.module.css';

export const SubInput: FC<SubInputProps> = ({ error, hint }) => {
  if (!error && !hint) return null;

  const subInputClasses = cn({
    [styles.error]: error,
    [styles.hint]: hint && !error,
  });

  return <span className={subInputClasses}>{error || hint}</span>;
};