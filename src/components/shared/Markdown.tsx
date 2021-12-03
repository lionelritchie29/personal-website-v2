import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

interface Props {
  body: string;
}

const Markdown: React.FC<Props> = ({ body }) => {
  return (
    <div className='markdown'>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  );
};

export default Markdown;
