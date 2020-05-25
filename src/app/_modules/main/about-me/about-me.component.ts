import { Component, OnInit } from '@angular/core';

import { MetaDataService } from '@app/_services/metatag.service';
import { PageName } from '@app/_models';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private metaDataService: MetaDataService
  ) { }

  ngOnInit() {
    this.metaDataService.setMetaData(PageName.ABOUT_ME);
  }

}
