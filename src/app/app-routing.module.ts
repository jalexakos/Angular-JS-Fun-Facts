import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapFunctionComponent } from './map-function/map-function.component';
import { JsCreatorComponent } from './js-creator/js-creator.component';

const routes: Routes = [
  {
    path:'promises', component: PromisesComponent
  },
  {
    path:'callbacks', component: CallbacksComponent
  },
  {
    path:'map-function', component: MapFunctionComponent
  },
  {
    path:'js-creator', component: JsCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
