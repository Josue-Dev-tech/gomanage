import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelSingleComponent } from './personnel-single.component';

describe('PersonnelSingleComponent', () => {
  let component: PersonnelSingleComponent;
  let fixture: ComponentFixture<PersonnelSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
