import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Matricula } from 'src/app/models/matricula.model';
import { FormInfoService } from 'src/app/services/form-info.service';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit, OnDestroy {

  constructor(
    public formInfo: FormInfoService,
    private router: Router,
    private matriculaService: MatriculaService,
  ) { }
  submitted = false;
  loading = false;

  steps = [
    { label: "¿En qué te quieres especializar?", routerLink: "/matricula/form/1" },
    { label: "Horario y Modalidad", routerLink: "/matricula/form/2" },
    { label: "Tarifa", routerLink: "/matricula/form/3" },
    { label: "Datos personales", routerLink: "/matricula/form/4" },
    { label: "Dirección", routerLink: "/matricula/form/5" },
    { label: "Forma de pago", routerLink: "/matricula/form/6" }
  ]
  
  currentIndex = 0;

  images = [
    {src: "./assets/img/undraw_reading_re_29f8.svg"},
    {src: "./assets/img/undraw_scrum_board_re_wk7v.svg"},
    {src: "./assets/img/undraw_choose_re_7d5a.svg"},
    {src: "./assets/img/undraw_dev_focus_re_6iwt.svg"},
    {src: "./assets/img/undraw_through_the_park_lxnl.svg"},
    {src: "./assets/img/undraw_transfer_money_re_6o1h.svg"}
  ]
  //Vemos los cambios en la navegacion y cambiamos imagen
  private sub = this.router.events
  .pipe(
    filter(e => e instanceof NavigationEnd),
    map(e => e as NavigationEnd),
  ).subscribe(
    e => { this.detectCurrentStep(e); }
  );
    
  ngOnInit(): void {
  }
  
  submitMatricula(matriculaForm) {
    this.formInfo.isSubmitted = true;
    let value = matriculaForm.value;
    
    let matricula = <Matricula> { 
      ...value.pagina1, ...value.pagina2,
      ...value.pagina3, ...value.pagina4, 
      ...value.pagina5, ...value.pagina6 
    } as Matricula;
    
    matricula.dateTime = new Date().toString();
    
    this.loading = true;
    
    if(this.formInfo.isValid()) {
      this.matriculaService.createOrUpdate(matricula)
      .then(() => {
        this.loading = false;
        this.router.navigateByUrl("/matricula/success");
      })
      .catch((err) => {
        this.loading = false;
        console.log(err)
      })
    } else {
      this.loading = false;
    }
  }
  
  /**
   * Metodo que se ejecuta cada vez que hay un cambio en
   * la navegación y asi poder cambiar las imagenes
   * 
   * @param e Evento de navegación
   */
  detectCurrentStep(e) {
    for(let step of this.steps) {
      if(e.url === step.routerLink) {
        this.currentIndex = this.steps.indexOf(step);
      }
    }
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }
}
