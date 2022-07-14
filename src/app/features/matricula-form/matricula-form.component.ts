import { AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

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
    {src: "../../assets/img/undraw_reading_re_29f8.svg"},
    {src: "../../assets/img/undraw_scrum_board_re_wk7v.svg"},
    {src: "../../assets/img/undraw_choose_re_7d5a.svg"},
    {src: "../../assets/img/undraw_dev_focus_re_6iwt.svg"},
    {src: "../../assets/img/undraw_through_the_park_lxnl.svg"},
    {src: "../../assets/img/undraw_transfer_money_re_6o1h.svg"}
  ]
  
  private sub = this.router.events
  .pipe(
    filter(e => e instanceof NavigationEnd),
    map(e => e as NavigationEnd),
  ).subscribe(
    e => { this.detectCurrentStep(e); }
  );
    
  ngOnInit(): void {
  }
  
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