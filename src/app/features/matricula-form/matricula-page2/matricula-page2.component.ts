import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Horario } from 'src/app/models/horario.model';
import { Modalidad } from 'src/app/models/modalidad.model';
import { FormInfoService } from 'src/app/services/form-info.service';
import { HorarioService } from 'src/app/services/horario.service';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-matricula-page2',
  templateUrl: './matricula-page2.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page2.component.css',    
  ]
})
export class MatriculaPage2Component implements OnInit {
  
  modalidades$: Observable<Modalidad[]>;
  horarios$: Observable<Horario[]>;
  
  form!: FormGroup;

  constructor(
    public formInfo: FormInfoService,
    private modalidadService: ModalidadService,
    private horarioService: HorarioService,
    private rootFormGroup: FormGroupDirective
    ) { }

  ngOnInit(): void {    
    this.form = this.rootFormGroup.control.get("pagina2") as FormGroup;

    this.modalidades$ = this.modalidadService.list().pipe(
      map(modalidades => this.modalidadesToOptions(modalidades) )
    );
    this.horarios$ = this.horarioService.list().pipe(
      map(horarios => this.horarioToOptions(horarios) )
    );
  }
  
  modalidadesToOptions(modalidades) {
    let modalidadesOptions = [];
    for(let modalidad of modalidades) {
      let option = { label: modalidad.nombre, value: modalidad.nombre }
      modalidadesOptions.push(option);
    }
    return modalidadesOptions;
  }
  
  horarioToOptions(horarios) {
    let horariosOptions = [];
    for(let horario of horarios) {
      let option = { label: horario.nombre, value: horario.nombre }
      horariosOptions.push(option);
    }
    return horariosOptions;
  }
  
}
