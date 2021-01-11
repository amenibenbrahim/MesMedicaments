import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { FormsModule } from '@angular/forms';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MedicamentsComponent,
    AddMedicamentComponent,
    UpdateMedicamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
