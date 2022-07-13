import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    public formInfo: FormInfoService,
    private ramaService: RamaService,
    private provinciaService: ProvinciaService
  ) { }

  ngOnInit(): void {
    this.ramas$ = this.ramaService.list().pipe(
      map(ramas => this.ramasToSelect(ramas) )
    );
    
    this.provincias$ = this.provinciaService.list().pipe(
      map(provincias => this.provinciasToSelect(provincias) )
    );
    
  }
  
  ramasToSelect(ramas) {
    console.log(ramas)
    let ramasGroups = []
    for(let rama of ramas)  {
      let ramaSelect = ramasGroups.find((group) => group.label === rama.familia);
      if(!ramaSelect) {
        ramaSelect = { label: rama.familia, options: [] };
        ramaSelect.options.push(
          { 
            labelList: rama.rama, 
            labelSelected: `${rama.familia} - ${rama.rama}`, 
            value: rama 
          })
        ramasGroups.push(ramaSelect);
      } else {
        ramaSelect.options.push(
          { 
            labelList: rama.rama, 
            labelSelected: `${rama.familia} - ${rama.rama}`, 
            value: rama 
          })
      }
    }
    console.log(ramasGroups);
    return ramasGroups;
  }
  
  provinciasToSelect(provincias) {
    let provinciasGroup = [];
    for(let provincia of provincias) {
      provinciasGroup.push({ label: provincia.nombre, value: provincia })
    }
    return provinciasGroup;
  }

  test() {
    console.log(this.formInfo.matricula)
  }
}
