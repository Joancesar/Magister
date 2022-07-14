import { Component, OnInit } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';

@Component({
  selector: 'app-matricula-page4',
  templateUrl: './matricula-page4.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page4.component.css'
  ]
})
export class MatriculaPage4Component implements OnInit {

  constructor(
    public formInfo: FormInfoService
  ) { }

  ngOnInit(): void {
  }

  
  test() {
    console.log(this.formInfo.matricula)
  }
}
