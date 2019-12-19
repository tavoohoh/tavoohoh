import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export enum PortfolioLayout {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export class Project {
  constructor(
    public title: string,
    public category: string,
    public image: { url: string, layout: PortfolioLayout },
    public date: Date,
    public framework: string,
    public technologies: string[],
    public body: string,
    public link?: Array<{ name: string, url: string, isApp?: boolean }>
  ) {}
}

@Injectable()
export class ProjectAdapter implements Adapter<Project> {
  adapt(item: any): Project {
    return new Project(
      item.title,
      item.category,
      item.images,
      item.date,
      item.framework,
      item.technologies,
      item.body,
      item.link
    );
  }
}
