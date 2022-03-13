import React, { FC } from 'react';

import { SubInputProps } from '@/select/typings';

import styles from './index.module.css';

const SubInput: FC<SubInputProps> = ({ error, hint }) => {
  return (
    <>
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        hint && <span className={styles.hint}>{hint}</span>
      )}
    </>
  );
};

export { SubInput };
