import React from 'react';
import Style from './style.module.scss';
export const BigSpinner = () => {
  return (
    <div className={Style.spinnerContainer}>
      <div className={Style.spinner + ' ' + Style.bigSpinner}></div>
    </div>
  );
};
