import { Router } from '@angular/router';
import { Personnel } from './../models/personnel.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  @Input() personnel!: Personnel;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDetailView(){
      this.router.navigateByUrl(`personnels/${this.personnel.id}`);
  }

}
