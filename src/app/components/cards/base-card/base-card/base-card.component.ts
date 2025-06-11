import { Component } from '@angular/core';
import { InputComponent } from '../../../input/input.component';
import { DropdownMenuComponent } from '../../../dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../../../button/button.component';
import { CheckboxComponent } from '../../../Checkbox/checkbox/checkbox.component';

@Component({
  selector: 'app-base-card',
  imports: [InputComponent, DropdownMenuComponent, ButtonComponent, CheckboxComponent],
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {

  nameMeasurement: string = '';
  descriptionMeasurement: string = '';


  createMeasurement() {
    const measurement = {
      name: this.nameMeasurement,
      description: this.descriptionMeasurement
    };

    console.log('✅ Medición creada:', measurement);

    this.nameMeasurement = '';
    this.descriptionMeasurement = '';
  }

  cancelCreationMeasurement() {
    console.log('❌ Creación cancelada. Reiniciando campos.');

    this.nameMeasurement = '';
    this.descriptionMeasurement = '';
  }

}
