 /*

* Author: Megyeri Márk Máté
* Copyright: 2022, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2022.11.28
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/
 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    AboutComponent,
    GitComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
