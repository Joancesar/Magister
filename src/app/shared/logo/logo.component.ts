import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'magister-logo',
  template: `
  <div class="mag-logo">
    <img src="./assets/img/logo.png" alt="Magister Logo">
    <div class="mag-logo-title">Magister</div>
  </div>`,
  styles: [
    `.mag-logo { 
      display: flex;
      align-items: center;
    }
    .mag-logo img {
      width: 85px;
    }
    .mag-logo-title {
      font-size: 2rem;
      font-weight: normal;
      margin: 34px 0px 0px 12px;
    }`
  ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
