import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Main1Component } from './components/main1/main1.component';
import { MenuComponent } from './components/menu/menu.component';
import { ButtonComponent } from './components/button/button.component';
import { AppmenuComponent } from './routes/appmenu/appmenu.component';
import { MayorDeEdadComponent } from './routes/mayor-de-edad/mayor-de-edad.component';
import { AppmayoredadComponent } from './components/appmayoredad/appmayoredad.component';
import { AppprimoComponent } from './components/appprimo/appprimo.component';
import { PrimoComponent } from './routes/primo/primo.component';
import { CalculadoraComponent } from './routes/calculadora/calculadora.component';
import { InfopageComponent } from './components/infopage/infopage.component';
import { InfoComponent } from './routes/info/info.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Main1Component,
    MenuComponent,
    ButtonComponent,
    AppmenuComponent,
    MayorDeEdadComponent,
    AppmayoredadComponent,
    AppprimoComponent,
    PrimoComponent,
    CalculadoraComponent,
    InfopageComponent,
    InfoComponent,
    CalculatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
