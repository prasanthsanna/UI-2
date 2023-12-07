import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  generalMenu: any;
  filteredGeneralMenu: any;
  groupPackage;

  constructor(public dataService: DataService) {
    this.groupPackage = this.dataService.getGroupPackageInfo();
  }

  ngOnInit(): void {
    this.generalMenu = this.groupPackage.generalMenu;
    this.filteredGeneralMenu = this.groupPackage.generalMenu;
  }
}
