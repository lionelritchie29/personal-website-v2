import React from 'react';

interface Props {
  tag: string;
  className?: string;
}

const TagBadge: React.FC<Props> = ({ tag, className }) => {
  return (
    <div
      className={`inline-block text-sm px-2 py-1 rounded-md text-gray-50 bg-blue-500 dark:bg-gray-600 ${className}`}>
      {tag}
    </div>
  );
};

export default TagBadge;
