import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-platform',
  templateUrl: './create-platform.component.html',
  styleUrls: ['./create-platform.component.scss'],
})
export class CreatePlatformComponent {
  @Input() title: any;
  selectedValue = '';
  envSelected = '';
  altsSelected = '';
  envOptions = [
    { value: 'option-0', viewValue: 'Option 1' },
    { value: 'option-1', viewValue: 'Option 2' },
    { value: 'option-2', viewValue: 'Option 3' },
  ];
}
