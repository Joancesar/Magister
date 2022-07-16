import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
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
  
  form!: FormGroup;

  constructor(
    public formInfo: FormInfoService,
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get("pagina4") as FormGroup;

  }

  
  test() {
    
  }
}
