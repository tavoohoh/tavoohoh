import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
  ) { }

  /**
   * Allow only numbers
   * @param event: boolean
   */
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  /**
   * Set translation for the caller
   * @param lang language es | en
   * @param translations a JSON of translations
   * @param merge Manually sets an object of translations
   * for a given language, set shouldMerge to true if you want
   * to append the translations instead of replacing them
   */
  setTranslation(
    lang: string,
    translations: object,
    merge: boolean = false
  ) {
    this.translate.setTranslation(lang, translations, merge);
  }

  /**
   * Returns a translation value
   * @param translation translation value as string
   */
  getTranslation(value: string) {
    let translation = '';

    this.translate.get(value).subscribe((res: string) => {
      translation = res;
    });

    return translation;
  }

  /**
   * Return returnUrl
   * from route parameters or default to '/'
   */
  returnUrl(def: string = '/') {
    return this.route.snapshot.queryParams.returnUrl || def;
  }

}
