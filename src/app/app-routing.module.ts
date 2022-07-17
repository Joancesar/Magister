import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MatriculaComponent } from './features/matricula/matricula.component';
import { MatriculaFormComponent } from './features/matricula-form/matricula-form.component';
import { MatriculaPage1Component } from './features/matricula-form/matricula-page1/matricula-page1.component';
import { MatriculaPage2Component } from './features/matricula-form/matricula-page2/matricula-page2.component';
import { MatriculaPage3Component } from './features/matricula-form/matricula-page3/matricula-page3.component';
import { MatriculaPage4Component } from './features/matricula-form/matricula-page4/matricula-page4.component';
import { MatriculaPage5Component } from './features/matricula-form/matricula-page5/matricula-page5.component';
import { MatriculaPage6Component } from './features/matricula-form/matricula-page6/matricula-page6.component';
import { MatriculaSentComponent } from './features/matricula-sent/matricula-sent.component';
import { SendFormGuard } from './shared/send-form.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'matricula', component: MatriculaComponent },
  { 
    path: 'matricula/form', 
    component: MatriculaFormComponent,  
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: '1', component: MatriculaPage1Component },
      { path: '2', component: MatriculaPage2Component },
      { path: '3', component: MatriculaPage3Component },
      { path: '4', component: MatriculaPage4Component },
      { path: '5', component: MatriculaPage5Component },
      { path: '6', component: MatriculaPage6Component },
    ]
  },
  { 
    path: 'matricula/success', 
    component: MatriculaSentComponent, 
    canActivate: [SendFormGuard] 
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
