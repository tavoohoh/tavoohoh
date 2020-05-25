import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { Project, PageName } from '@app/_models';
import { Portfolio } from './portfolio';
import { MetaDataService } from '@app/_services/metatag.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Project[];

  constructor(
    public ngxService: NgxUiLoaderService,
    private metaDataService: MetaDataService
  ) { }

  /**
   * Lifecycles
   */
  ngOnInit() {
    this.getPorfolio();
    this.metaDataService.setMetaData(PageName.PORTFOLIO);
  }

  /**
   * Get a list of projects
   */
  private getPorfolio() {
    this.ngxService.start();
    this.portfolio = Portfolio;
    this.portfolio = this.portfolio.reverse();
    this.ngxService.stop();
  }

  /**
   * Check if date is valid
   */
  public checkDate(date: Date | string): boolean {
    if (new Date(date).toString() === 'Invalid Date') {
      return false;
    } else {
      return true;
    }
  }

}
