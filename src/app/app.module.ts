import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapFunctionComponent } from './map-function/map-function.component';
import { JsCreatorComponent } from './js-creator/js-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    CallbacksComponent,
    MapFunctionComponent,
    JsCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
