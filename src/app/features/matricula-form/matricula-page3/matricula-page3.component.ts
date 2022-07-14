import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tarifa } from 'src/app/models/tarifa.model';
import { FormInfoService } from 'src/app/services/form-info.service';
import { TarifaService } from 'src/app/services/tarifa.service';

@Component({
  selector: 'app-matricula-page3',
  templateUrl: './matricula-page3.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page3.component.css'
  ]
})
export class MatriculaPage3Component implements OnInit {
  
  tarifas$: Observable<Tarifa[]>;

  constructor(
    public formInfo: FormInfoService,
    private tarifaService: TarifaService
  ) { }

  ngOnInit(): void {
    this.tarifas$ = this.tarifaService.list().pipe(
      map(tarifas => this.tarifasToOptions(tarifas) )
    );
  }
  tarifasToOptions(tarifas) {
    let tarifasOptions = [];
    for(let tarifa of tarifas) {
      let option = { 
        label: `${tarifa.nombre} - ${tarifa.material} - ${tarifa.precio}`, 
        value: tarifa 
      }
      tarifasOptions.push(option);
    }
    return tarifasOptions;
  }

  test() {
    console.log(this.formInfo.matricula)
  }
  
}
