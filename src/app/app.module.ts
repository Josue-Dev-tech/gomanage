import { AppRouting } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonnelSingleComponent } from './personnel-single/personnel-single.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonnelSingleComponent,
    PersonnelComponent,
    PersonnelListComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
