export type BlogPost = {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
  id: string;
  body: string;
  slug: string;
  excerpt: string;
};
