import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';
import { StoreItemCardComponent } from './_components/store-item-card/store-item-card.component';
import { StoreComponent } from './pages/store/store.component';
import { StoreSidebarComponent } from './_components/store-sidebar/store-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    StoreComponent,
    StoreItemCardComponent,
    StoreSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
