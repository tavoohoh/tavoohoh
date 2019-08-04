import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@app/_models';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { portfolio } from './portfolio';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolio: Project[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) { }

  /**
   * Lifecycles
   */
  ngOnInit() {
    this.getPorfolio();
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {}

  /**
   * Get a list of projects
   */
  async getPorfolio() {
    this.ngxService.start();
    this.portfolio = await portfolio;
    this.ngxService.stop();
  }

}
