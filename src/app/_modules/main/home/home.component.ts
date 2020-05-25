import { Component, OnInit } from '@angular/core';

import { MetaDataService } from '@app/_services/metatag.service';
import { PageName } from '@app/_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private metaDataService: MetaDataService
  ) { }

  ngOnInit() {
    this.metaDataService.setMetaData(PageName.HOME);
  }

}
