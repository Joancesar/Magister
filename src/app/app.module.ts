import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './features/home/home.component';
import { SharedModule } from './shared/shared.module';
import { MatriculaComponent } from './features/home/matricula/matricula.component';
import { MatriculaFormComponent } from './features/matricula-form/matricula-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatriculaPage1Component } from './features/matricula-form/matricula-page1/matricula-page1.component';
import { MatriculaPage2Component } from './features/matricula-form/matricula-page2/matricula-page2.component';
import { MatriculaPage3Component } from './features/matricula-form/matricula-page3/matricula-page3.component';
import { MatriculaPage4Component } from './features/matricula-form/matricula-page4/matricula-page4.component';
import { MatriculaPage5Component } from './features/matricula-form/matricula-page5/matricula-page5.component';
import { MatriculaPage6Component } from './features/matricula-form/matricula-page6/matricula-page6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatriculaComponent,
    MatriculaFormComponent,
    MatriculaPage1Component,
    MatriculaPage2Component,
    MatriculaPage3Component,
    MatriculaPage4Component,
    MatriculaPage5Component,
    MatriculaPage6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
    SharedModule,
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
