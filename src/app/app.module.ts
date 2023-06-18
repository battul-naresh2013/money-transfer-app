import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BbUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
