import React from 'react';
import { SmallSpinner } from '../Spinner';

const Button = ({ className, onClickCallback, text, isLoading }) => {
  return (
    <button
      className={className}
      onClick={onClickCallback}
      disabled={isLoading ? true : false}
    >
      {text}
      <SmallSpinner />
    </button>
  );
};

export { Button };
