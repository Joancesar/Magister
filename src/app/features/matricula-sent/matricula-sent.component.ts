import { Component, OnInit } from '@angular/core';
import { FormInfoService } from 'src/app/services/form-info.service';

@Component({
  selector: 'app-matricula-sent',
  templateUrl: './matricula-sent.component.html',
  styleUrls: ['./matricula-sent.component.css']
})
export class MatriculaSentComponent implements OnInit {

  constructor(private formInfo: FormInfoService) { }

  ngOnInit(): void {
    this.formInfo.resetForm();
  }

}
