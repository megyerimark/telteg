import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalcComponent } from './calc/calc.component';
import { GitComponent } from './git/git.component';

const routes: Routes = [
  {path: "calc", component:CalcComponent},
  {path: "about", component:AboutComponent},
  {path: "git", component:GitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
