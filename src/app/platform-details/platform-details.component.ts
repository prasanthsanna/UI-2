import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { CreatePlatformComponent } from './create-platform/create-platform.component';

export interface platformElement {
  name: string;
  code: number;
  environments: string;
  alts: string;
}

const PLATFORM_DATA: platformElement[] = [
  {
    name: 'Name 1',
    code: 100,
    environments: 'environments 1',
    alts: 'alts 1',
  },
  {
    name: 'Name 2',
    code: 101,
    environments: 'environments 2',
    alts: 'alts 2',
  },
  {
    name: 'Name 1',
    code: 100,
    environments: 'environments 1',
    alts: 'alts 1',
  },
  {
    name: 'Name 2',
    code: 101,
    environments: 'environments 2',
    alts: 'alts 2',
  },
  {
    name: 'Name 1',
    code: 100,
    environments: 'environments 1',
    alts: 'alts 1',
  },
  {
    name: 'Name 2',
    code: 101,
    environments: 'environments 2',
    alts: 'alts 2',
  },
  {
    name: 'Name 1',
    code: 100,
    environments: 'environments 1',
    alts: 'alts 1',
  },
  {
    name: 'Name 2',
    code: 101,
    environments: 'environments 2',
    alts: 'alts 2',
  },
];

@Component({
  selector: 'app-platform-details',
  templateUrl: './platform-details.component.html',
  styleUrls: ['./platform-details.component.css'],
})
export class PlatformDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'code', 'environments', 'alts'];
  dataSource = new MatTableDataSource<platformElement>(PLATFORM_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openPlatformsModal(title: any) {
    const modalRef = this.dialog.open(CreatePlatformComponent, {
      width: '1000px',
      ariaModal: true,
    });
    modalRef.componentInstance.title = title;
  }
}
