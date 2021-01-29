import React from 'react';
import Style from './style.module.scss';
export const SmallSpinner = () => {
  return (
    <span style={{ width: '30px' }}>
      <span className={Style.smallSpinner}></span>
    </span>
  );
};
