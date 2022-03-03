import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from './../services/personnel.service';
import { Personnel } from './../models/personnel.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personnel-single',
  templateUrl: './personnel-single.component.html',
  styleUrls: ['./personnel-single.component.css']
})
export class PersonnelSingleComponent implements OnInit {
  @Input() personnel!: Personnel;
  constructor(private personnelsersive: PersonnelService, private router: ActivatedRoute) { }// activeRoute est permet ID

  ngOnInit(): void {
    const peronnelId= +this.router.snapshot.params['id'];
    this.personnel= this.personnelsersive.getPersonnelbyId(peronnelId);
  }

}
