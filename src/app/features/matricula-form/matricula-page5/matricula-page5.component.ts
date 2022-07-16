import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
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
  
  form!: FormGroup;

  constructor(
    public formInfo: FormInfoService,
    private comunidadService: ComunidadService,
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get("pagina5") as FormGroup;

    this.comunidades$ = this.comunidadService.list().pipe(
      map(comunidades => this.comunidadesToOptions(comunidades) )
    );
  }
  
  comunidadesToOptions(comunidades) {
    let comunidadesOptions = [];
    for(let comunidad of comunidades) {
      let option = { 
        label: comunidad.nombre, 
        value: comunidad.nombre
      }
      comunidadesOptions.push(option);
    }
    return comunidadesOptions;
  }
  
}
