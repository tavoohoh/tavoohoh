import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '@app/_services';
import { Project } from '@app/_models';

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolio: Project[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private mainService: MainService
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
    this.portfolio = await this.mainService.getPortfolio();
    this.ngxService.stop();

    console.log(this.portfolio);

  }

}
