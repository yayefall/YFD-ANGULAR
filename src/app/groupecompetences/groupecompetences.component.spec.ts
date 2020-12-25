import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupecompetencesComponent } from './groupecompetences.component';

describe('GroupecompetencesComponent', () => {
  let component: GroupecompetencesComponent;
  let fixture: ComponentFixture<GroupecompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupecompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupecompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
