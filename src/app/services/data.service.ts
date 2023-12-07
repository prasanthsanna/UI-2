import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as CONFIG from '../config.const';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public getGroupPackageStorageInfo() {
    return JSON.parse(localStorage.getItem('groupPackage')!);
  }
  public getGroupPackageInfo() {
    if (this.getGroupPackageStorageInfo()) {
      return this.getGroupPackageStorageInfo();
    } else {
      return {
        generalMenu: CONFIG.defaultGeneralMenu,
      };
    }
  }
}
