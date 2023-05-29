import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AppmenuComponent } from './routes/appmenu/appmenu.component';
import { MayorDeEdadComponent } from './routes/mayor-de-edad/mayor-de-edad.component';
import { PrimoComponent } from './routes/primo/primo.component';
import { CalculadoraComponent } from './routes/calculadora/calculadora.component';
import { InfoComponent } from './routes/info/info.component';


const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "appmenu", component: AppmenuComponent},
  {path: "mayordeedad", component: MayorDeEdadComponent},
  {path: "primo", component: PrimoComponent},
  {path: "calculadora", component: CalculadoraComponent},
  {path: "informacion", component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
