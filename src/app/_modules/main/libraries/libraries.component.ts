import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { Project } from '@app/_models';
import { Library } from './library';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {
  library: Project[];

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
  private getPorfolio() {
    this.ngxService.start();
    this.library = Library;
    this.library = this.library.reverse();
    this.ngxService.stop();
  }
}
