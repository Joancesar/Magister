import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'magister-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Input() name;
  
  @Input() placeholder = "";
  
  @Input() model;
  @Output() modelChange = new EventEmitter<any>();
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
