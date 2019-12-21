import { Link, Image } from './type';

export interface Project {
  title: string;
  category: string;
  image: Image;
  date: Date;
  technologies: string[];
  body: string;
  framework?: string;
  references?: Array<Link>;
}
