import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ComboCardViewComponent } from './combo-card-view/combo-card-view.component';
import { SideMenuComponent } from './combo-card-view/side-menu/side-menu.component';
import { DetailViewComponent } from './combo-card-view/detail-view/detail-view.component';
import { SubHeroLogoComponent } from './shared-ui/sub-hero-logo/sub-hero-logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { SubSectionComponent } from './home/sub-section/sub-section.component';
import { CardComponent } from './home/sub-section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BreadcrumbsComponent } from './shared-ui/breadcrumbs/breadcrumbs.component';
import { ContactComponent } from './contact/contact.component';
import { RouterLink, RouterLinkActive, RouterModule, Routes } from '@angular/router';//add router module to app
import { AboutComponent } from './about/about.component';
import { ProductsViewComponent } from './products-view/products-view.component';

export enum ROUTER_TOKENS {
  HOME ='home',
  SHOP='shop',
  CONTACT='contact',
  ABOUT='about',
}

export const ROUTES : Routes = [
  {
    path: '',
    //component : HomeComponent
    //if we use redirect then we need to define it with pathMatch
    //redirectTo: 'home',
    redirectTo : ROUTER_TOKENS.HOME,
    pathMatch: 'full',//default behavour is prefix not full
  },
  {
    //path : 'home',
    path : ROUTER_TOKENS.HOME,
    component : HomeComponent,
  },
  {
    path : ROUTER_TOKENS.SHOP,
    component : ProductsViewComponent,
  },
  {
    path : ROUTER_TOKENS.CONTACT,
    component : ContactComponent,
  },
  {
    path : ROUTER_TOKENS.ABOUT,
    component : AboutComponent,
  },
  {
    path: '**',
    //component : HomeComponent, // sends every wrong url to home component
    component : NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComboCardViewComponent,
    SideMenuComponent,
    DetailViewComponent,
    SubHeroLogoComponent,
    NotFoundComponent,
    HeroSectionComponent,
    SubSectionComponent,
    CardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    // RouterModule.forRoot(ROUTES, {
    //   enableTracing : true//to see router events on console of web browser
    // })//creates single instance for router module
    RouterModule.forRoot(ROUTES),//creates single instance for router module
    RouterLink,
    RouterLinkActive,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
