import { Injectable } from '@angular/core';
import { Personnel } from './../models/personnel.model';

@Injectable({
  providedIn: "root",
})
export class PersonnelService
{
  personnels: Personnel[]=[
    {
      id: 1,
      name: 'Josue AGBOTON',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 39,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
      adresse: 'Porto'
    },
    {
      id: 2,
      name: 'Josue HOLL',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 23,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
    },
    {
      id: 3,
      name: 'Unell OTON',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 20,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
      adresse: 'ACRA'
    },
    {
      id: 4,
      name: 'Christope LOPO',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 36,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
      adresse: 'Porto'
    },
    {
      id: 5,
      name: 'Paul HOTI',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 29,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
    },
    {
      id: 4,
      name: 'Christope LOPO',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 26,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
      adresse: 'Porto'
    },
    {
      id: 4,
      name: 'Christope NIEOL',
      profil: 'https://media.glamour.com/photos/5696762a16d0dc3747f0617c/master/w_1600%2Cc_limit/sex-love-life-2012-03-0217-jake-doctor_at.jpg',
      age: 37,
      prime: 0.4344,
      salary: 3204609,
      registrationDate: new Date(),
      adresse: 'Porto'
    },

  ];

  getAllPersonnel(): Personnel[]{
    return this.personnels;
  }

  getPersonnelbyId(id: number): Personnel{
    const personnelid= this.personnels.find(Personnel=>Personnel.id=== id);
    if(personnelid){
      return personnelid;
    }else{
        throw new Error('Personnel not found');
    }
  }
}
