import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { projects } from '@app/_modules/main/portfolio';
import { Project } from '@app/_models';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getPortfolio(): Project[] {
    return projects;
  }
}
