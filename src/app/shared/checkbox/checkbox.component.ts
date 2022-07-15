import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'magister-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  
  @Input() id;

  constructor() { }

  ngOnInit(): void {
  }

}
