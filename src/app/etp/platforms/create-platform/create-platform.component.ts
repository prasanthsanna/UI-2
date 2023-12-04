import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-platform',
  templateUrl: './create-platform.component.html',
  styleUrl: './create-platform.component.scss',
})
export class CreatePlatformComponent {
  activeModal = inject(NgbActiveModal);
  @Input() title: any;
  envSelected = '';
  altsSelected = '';
  envOptions = [
    { value: 'option-0', viewValue: 'Option 1' },
    { value: 'option-1', viewValue: 'Option 2' },
    { value: 'option-2', viewValue: 'Option 3' },
  ];
}
