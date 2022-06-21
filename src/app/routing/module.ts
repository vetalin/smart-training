import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTrainingComponent } from "../create-training/component/create-training/create-training.component"; // CLI imports router

const routes: Routes = [
  {
    path: '',
    component: CreateTrainingComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
