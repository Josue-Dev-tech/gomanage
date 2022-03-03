import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PersonnelSingleComponent } from './personnel-single/personnel-single.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes=[
  {path:'personnels', component: PersonnelListComponent},
  {path: 'personnels/:id', component: PersonnelSingleComponent},
  {path: '', component: WelcomePageComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{}
