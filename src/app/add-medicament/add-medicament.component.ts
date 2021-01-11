import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament.model';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
})
export class AddMedicamentComponent implements OnInit {

  newMedicament = new Medicament();
  
  message : string;
  
  constructor(private medicamentService: MedicamentService) { }

  ngOnInit(): void {
  }

  addMedicament(){
    // console.log(this.newMedicament);
    this.medicamentService.ajouterMedicament(this.newMedicament);
    this.message = "Medicament " +this.newMedicament.nomMedicament+" ajout avec succès !"
  }

}
