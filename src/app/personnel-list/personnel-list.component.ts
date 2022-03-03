import { Router } from '@angular/router';
import { PersonnelService } from './../services/personnel.service';
import { Component, OnInit } from '@angular/core';
import { Personnel } from '../models/personnel.model';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {
  personnels!: Personnel[];
  constructor(private personnelservice: PersonnelService, private router: Router) { }

  ngOnInit(): void {
      this.personnels= this.personnelservice.getAllPersonnel();
  }

 

}
