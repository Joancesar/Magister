import { Component, OnInit } from '@angular/core';
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

  constructor(
    public formInfo: FormInfoService,
    private modalidadService: ModalidadService,
    private horarioService: HorarioService
    ) { }

  ngOnInit(): void {
    this.modalidades$ = this.modalidadService.list().pipe(
      map(modalidades => this.ramasToOptions(modalidades) )
    );
    this.horarios$ = this.horarioService.list().pipe(
      map(horarios => this.horarioToOptions(horarios) )
    );
  }
  
  ramasToOptions(modalidades) {
    let modalidadesOptions = [];
    for(let modalidad of modalidades) {
      let option = { label: modalidad.nombre, value: modalidad }
      modalidadesOptions.push(option);
    }
    
    return modalidadesOptions;
  }
  
  horarioToOptions(horarios) {
    let horariosOptions = [];
    for(let horario of horarios) {
      let option = { label: horario.nombre, value: horario }
      horariosOptions.push(option);
    }
    
    return horariosOptions;
  }

  test() {
    console.log(this.formInfo.matricula)
  }
  
}
