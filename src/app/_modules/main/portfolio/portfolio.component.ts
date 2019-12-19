import { Component, OnInit } from '@angular/core';
import { Project } from '@app/_models';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { portfolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Project[];

  constructor(
    private ngxService: NgxUiLoaderService
  ) { }

  /**
   * Lifecycles
   */
  ngOnInit() {
    this.getPorfolio();
  }

  /**
   * Get a list of projects
   */
  async getPorfolio() {
    this.ngxService.start();
    this.portfolio = await portfolio;
    this.ngxService.stop();
  }

}
