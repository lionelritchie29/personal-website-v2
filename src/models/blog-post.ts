import { ImageDataLike } from 'gatsby-plugin-image';

export type BlogPost = {
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
    hero_image: ImageDataLike;
    hero_image_alt: string;
    hero_image_credit_text: string;
    hero_image_credit_link: string;
  };
  id: string;
  body: string;
  slug: string;
  excerpt: string;
  timeToRead: number;
};
