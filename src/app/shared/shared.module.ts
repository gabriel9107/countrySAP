import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';




@NgModule({
  declarations: [
    HomePageComponent, AboutPageComponent, SideBarComponent, ContactPageComponent

  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HomePageComponent, AboutPageComponent,
    SideBarComponent, ContactPageComponent
  ]
})
export class SharedModule { }
