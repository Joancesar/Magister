import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'magister-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent implements OnInit {
  
  @Input() model;
  @Output() modelChange = new EventEmitter<any>();

  _options = [];
  @Input()
  set options(options: any[]) {
    this._options = options;
    this.setOption();
  }
  get options() {
    return this._options;
  }
  
  @Input() direction: "row" | "column" = "row";
  
  @Input() isGrid = false;
  
  @Input() selectedOption;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  setOption() {
    if(this.model) {
      let modelPlain = {...this.model}
      for(let option of this.options) {
        if(this.shallowEqual(modelPlain, option.value)) {
          this.selectedOption = option;
          option.selected = true;
          return;
        }
      }
    }
  }
  
  clickOption(option) {
    
    this.selectedOption = option;
    
    if(this.selectedOption.selected && option.value == option.value) {
      this.selectedOption.selected = false;
      this.model = null;
    } else {
      for(let opt of this.options) {
        opt.selected = false;
      }
      this.selectedOption.selected = true;
      this.model = option.value;
    }
    this.modelChange.emit(this.model);

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
}
