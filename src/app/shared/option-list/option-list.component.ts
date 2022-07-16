import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'magister-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => OptionListComponent),
    },
  ],
})
export class OptionListComponent implements OnInit, ControlValueAccessor {
  
  value;
  
  @Input() name = "option"
  
  _options = [];
  @Input()
  set options(options: any[]) {
    this._options = options;
  }
  get options() {
    return this._options;
  }
  
  onTouched: () => void;
  onChange: (value) => void = () => {};
  
  /** Direccion del grid de opciones */
  @Input() direction: "row" | "column" = "row";
  
  /** Tamaño del boton opción */
  @Input() optionSize = 'auto';
  
  /** Espacion horizontal entre opciones */
  @Input() columnGap = '1.9rem';
  
  @Input() selectedOption;

  constructor() { }
  
  //Comunicamos el valor desde dentro
  registerOnChange(angularProvidedFunction) {
    this.onChange = angularProvidedFunction;
  }
  //Comunicamos onTouch
  registerOnTouched(angularProvidedFunction) {
    this.onTouched = angularProvidedFunction;
  }
  //Nos comunican el valor desde fuera
  writeValue(angularProvidedValue) {
    this.value = angularProvidedValue;
  }

  ngOnInit(): void {
  }
  
  selectOption(option) {
    this.value = option.value;
    this.onChange(this.value);
    this.onTouched();
  }
  
}
