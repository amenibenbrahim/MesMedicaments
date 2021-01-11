import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';

const routes: Routes = [
  {path : "medicaments", component : MedicamentsComponent},
  {path : "add-medicament", component : AddMedicamentComponent},
  {path : "", redirectTo: "medicaments" , pathMatch:"full"},
  {path: "updateMedicament/:id", component: UpdateMedicamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
