import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { Project } from '@app/_models';
import { Portfolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Project[];

  constructor(
    public ngxService: NgxUiLoaderService
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
  private getPorfolio() {
    this.ngxService.start();
    this.portfolio = Portfolio;
    this.portfolio = this.portfolio.reverse();
    this.ngxService.stop();
  }

}
