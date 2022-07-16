import { Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Model } from 'src/app/models/model';
import { Rama } from 'src/app/models/rama.model';

@Component({
  selector: 'magister-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  
  value;
  valueLabel = "";
  @Input() placeholder = "";
  
  onTouched: () => void;
  onChange: (value) => void = () => {};
  
  _optGroups = [];
  @Input()
  set optGroups(groups: any[]) {
    this._optGroups = groups;
  }
  get optGroups() {
    return this._optGroups;
  }
  
  _options = [];
  @Input()
  set options(options: any[]) {
    this._options = options;
  }
  get options() {
    return this._options;
  }

  constructor(public el: ElementRef) { }

  ngOnInit(): void {    
  }
  
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
    this.valueLabel = angularProvidedValue;
    this.value = angularProvidedValue;
  }
  
  
  selectOption(option) {
    this.valueLabel = option.labelSelected || option.label;
    this.value = option.value;
    this.onChange(this.value);
    this.toggleList();
  }
  
  toggle = false;
  toggleList() {
    this.onTouched();
    this.toggle = !this.toggle
  }
  
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.toggle = false;
    }
  }

}
