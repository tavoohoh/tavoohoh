import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

// External dependencies
// https://www.npmjs.com/package/@ngx-translate/core
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Modules
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from './_modules/shared.module';

// Components
import { AppComponent } from './app.component';

// Interceptors
import { ErrorInterceptor } from './_interceptors';

// Services
import {
  AuthService,
  FinappService,
  HelperService,
  MainService
} from './_services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    AuthService,
    FinappService,
    HelperService,
    MainService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
