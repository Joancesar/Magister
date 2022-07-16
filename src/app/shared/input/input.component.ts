import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'magister-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
   
  value;
  
  @Input() type;
  
  @Input() placeholder = "";  
  
  constructor() { }
  
  onTouched: () => void;
  onChange: (value) => void = () => {};
  
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

}
