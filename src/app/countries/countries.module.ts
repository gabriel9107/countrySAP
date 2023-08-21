import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriesPageComponent } from './pages/by-countries-page/by-countries-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriesPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule, CountriesRoutingModule
  ]
})
export class CountriesModule { }
