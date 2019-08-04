import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Project {
  constructor(
    public title: string,
    public category: string,
    public layout: string,
    public color: string[], // [0]: font, [1]: title, [2]: backgound
    public images: string[], // [0]: first image, [2]: second image
    public date: Date,
    public framework: string,
    public technologies: string,
    public body: string,
    public link: string [] // [0]: name, [1]: link
  ) {}
}

@Injectable()
export class ProjectAdapter implements Adapter<Project> {
  adapt(item: any): Project {
    return new Project(
      item.title,
      item.category,
      item.layout,
      item.color,
      item.images,
      item.date,
      item.framework,
      item.technologies,
      item.body,
      item.link
    );
  }
}
