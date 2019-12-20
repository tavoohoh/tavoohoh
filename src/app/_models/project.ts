import { Link, Image } from './type';

export interface Project {
  title: string;
  category: string;
  image: Image;
  date: Date;
  framework: string;
  technologies: string[];
  body: string;
  references?: Array<Link>;
}
