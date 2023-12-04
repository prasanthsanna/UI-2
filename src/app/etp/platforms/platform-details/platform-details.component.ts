import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CreatePlatformComponent } from '../create-platform/create-platform.component';

interface Country {
  name: string;
  code: number;
  environments: string;
  alts: string;
}

const PLATFORMDETAILS: Country[] = [
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
  styleUrl: './platform-details.component.scss',
})
export class PlatformDetailsComponent {
  private modalService = inject(NgbModal);
  title = '';

  platformDetails = PLATFORMDETAILS;

  openPlatformsModal(title: any) {
    const modalRef = this.modalService.open(CreatePlatformComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.title = title;
  }

  ngOnInit() {}
}
