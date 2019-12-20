import { Link, Image } from './type';

export interface Library {
  title: string;
  category: string;
  image: Image;
  date: Date;
  technologies: string[];
  body: string;
  references: Array<Link>;
}

