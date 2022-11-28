import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { CalComponent } from './cal/cal.component';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    CalComponent,
    AboutComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
