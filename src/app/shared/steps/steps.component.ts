import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'magister-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  
  @Input() steps: [];

  constructor() { }

  ngOnInit(): void {
  }

}
