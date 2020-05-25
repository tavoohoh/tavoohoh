import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageName } from '@app/_models';
import { MetaTags } from '@app/globals';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  public setMetaData(pageName: PageName): void {
    this.titleService.setTitle(MetaTags[pageName].title);
    this.metaTagService.updateTag({
      name: 'description',
      content: MetaTags[pageName].description
    });
  }
}
