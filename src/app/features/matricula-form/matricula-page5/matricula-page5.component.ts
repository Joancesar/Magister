import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comunidad } from 'src/app/models/comunidad.model';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { FormInfoService } from 'src/app/services/form-info.service';

@Component({
  selector: 'app-matricula-page5',
  templateUrl: './matricula-page5.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page5.component.css'
  ]
})
export class MatriculaPage5Component implements OnInit {
  
  comunidades$: Observable<Comunidad[]>;

  constructor(
    public formInfo: FormInfoService,
    private comunidadService: ComunidadService
  ) { }

  ngOnInit(): void {
    this.comunidades$ = this.comunidadService.list().pipe(
      map(comunidades => this.comunidadesToOptions(comunidades) )
    );
  }
  
  comunidadesToOptions(comunidades) {
    let comunidadesOptions = [];
    for(let comunidad of comunidades) {
      let option = { 
        label: comunidad.nombre, 
        value: comunidad 
      }
      comunidadesOptions.push(option);
    }
    return comunidadesOptions;
  }
  
  test() {
    console.log(this.formInfo.matricula)
  }
}
