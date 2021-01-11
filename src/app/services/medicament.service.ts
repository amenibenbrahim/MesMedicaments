import { Injectable } from '@angular/core';
import { Medicament } from '../model/medicament.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  medicaments : Medicament[];

  medicament : Medicament;



  constructor() {
   /* this.medicaments = [
      {idMedicament : 1, nomMedicament : "Panadole", prixMedicament : 4.600, dateVente : new Date("01/14/2011")},
      {idMedicament : 2, nomMedicament : "Aspegic", prixMedicament : 2.500, dateVente : new Date("12/17/2010")},
       {idMedicament : 3, nomMedicament :"Analgon", prixMedicament : 3.500, dateVente: new Date("02/20/2020")}
    ];*/
   }


   listeMedicaments():Medicament[] {
    return this.medicaments;
  }


  ajouterMedicament( medc: Medicament){
  this.medicaments.push(medc);
  }
  
  supprimerMedicament(m: Medicament)
  {
    const index = this.medicaments.indexOf(m, 0);
    if (index > -1) {
      this.medicaments.splice(index, 1);
    }
  }

  consulterMedicament(id:number): Medicament{
    return this.medicaments.find(m => m.idMedicament == id);
    //return this.medicament;
  }

  trierMedicaments(){
    this.medicaments = this.medicaments.sort((n1,n2) => {
    if (n1.idMedicament > n2.idMedicament) {
    return 1;
    }
    if (n1.idMedicament < n2.idMedicament) {
    return -1;
    }
    return 0;
    });
    }
    

  updateMedicament(m: Medicament)
  {
    //console.log(m);
    this.supprimerMedicament(m);
    this.ajouterMedicament(m);
    this.trierMedicaments();
  }




}
