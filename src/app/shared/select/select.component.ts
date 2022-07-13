import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Model } from 'src/app/models/model';
import { Rama } from 'src/app/models/rama.model';

@Component({
  selector: 'magister-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  
  @Input() name;
  @Input() placeholder = "";
  
  @Input() model: any = null;
  @Output() modelChange = new EventEmitter<any>();

  @Input() selectedOption: any = null;

  
  _optGroups = [];
  @Input()
  set optGroups(groups: any[]) {
    this._optGroups = groups;
    this.setSelectedLabel();
  }
  get optGroups() {
    return this._optGroups;
  }
  
  _options = [];
  @Input()
  set options(options: any[]) {
    this._options = options;
    this.setSelectedLabel();
  }
  get options() {
    return this._options;
  }

  constructor(public el: ElementRef) { }

  ngOnInit(): void {    
  }
  
  
  selectOption(option) {
    this.selectedOption = option.labelSelected || option.label;
    this.model = option.value;    
    this.modelChange.emit(this.model);
    this.toggleList();
    console.log(option)
  }
  
  setSelectedLabel() {
    if(this.model) {
      let modelPlain = {...this.model}
      for(let optGroup of this.optGroups) {
        for(let option of optGroup.options) {
          if(this.shallowEqual(modelPlain, option.value)) {
            this.selectedOption = option.labelSelected;
            return;
          }
        }
      }
      for(let option of this.options) {
        if(this.shallowEqual(modelPlain, option.value)) {
          this.selectedOption = option.label;
          return;
        }
      }
    }
  }
  
  shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
  
  toggle = false;
  toggleList() {
    this.toggle = !this.toggle
  }
  
  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.toggle = false;
    }
  }

}
