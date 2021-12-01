import React from 'react';

interface Props {
  text: string;
  className?: string;
}

const OutlineButton: React.FC<Props> = ({ text, className }) => {
  return (
    <button
      className={`border border-primary text-primary dark:text-primary-dark dark:border-primary-dark w-full px-3 py-2 rounded-md ${className}`}>
      {text}
    </button>
  );
};

export default OutlineButton;
