import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provincia } from 'src/app/models/provincia.model';
import { Rama } from 'src/app/models/rama.model';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { RamaService } from 'src/app/services/rama.service';
import { FormInfoService } from '../../../services/form-info.service';

@Component({
  selector: 'app-matricula-page1',
  templateUrl: './matricula-page1.component.html',
  styleUrls: [
    '../matricula-form.component.css',
    './matricula-page1.component.css'
  ]
})
export class MatriculaPage1Component implements OnInit {
  
  ramas$: Observable<Rama[]>;
  provincias$: Observable<Provincia[]>;
  
  haSidoAlumnoOptions = [
    { label: "No", value: "No"},  
    { label: "Sí", value: "Sí"},  
    { label: "Sí, después de 2017", value: "Sí, después de 2017" }  
  ];
  entregaMaterialOptions = [
    { label: "Material mes a mes", value: "Material mes a mes"},  
  ];
  
  form!: FormGroup;
  
  constructor(
    public formInfo: FormInfoService,
    private ramaService: RamaService,
    private provinciaService: ProvinciaService,
    private rootFormGroup: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get("pagina1") as FormGroup;

    /*
      Se llama al servicio de Ramas y se mapea para crear 
      opciones objecto y asi pasarlo a nuestros componentes Select
    */
    this.ramas$ = this.ramaService.list().pipe(
      map(ramas => this.ramasToOptions(ramas))
    );
    this.provincias$ = this.provinciaService.list().pipe(
      map(provincias => this.provinciasToOptions(provincias))
    );
  }
  
  
  
  ramasToOptions(ramas) {
    console.log(ramas)
    let ramasGroups = []
    for(let rama of ramas)  {
      let ramaSelect = ramasGroups.find((group) => group.label === rama.familia);
      if(!ramaSelect) {
        ramaSelect = { label: rama.familia, options: [] };
        ramaSelect.options.push({ 
            labelList: rama.nombre, 
            labelSelected: `${rama.familia} - ${rama.nombre}`, 
            value: `${rama.familia} - ${rama.nombre}` 
        })
        ramasGroups.push(ramaSelect);
      } else {
        ramaSelect.options.push({ 
            labelList: rama.nombre, 
            labelSelected: `${rama.familia} - ${rama.nombre}`, 
            value: `${rama.familia} - ${rama.nombre}`
        })
      }
    }
    console.log(ramasGroups);
    return ramasGroups;
  }
  
  provinciasToOptions(provincias) {
    let provinciasGroup = [];
    for(let provincia of provincias) {
      provinciasGroup.push({ label: provincia.nombre, value: provincia.nombre })
    }
    return provinciasGroup;
  }
  
}
