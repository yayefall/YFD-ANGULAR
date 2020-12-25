import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpcompetenceComponent } from './add-grpcompetence.component';

describe('AddGrpcompetenceComponent', () => {
  let component: AddGrpcompetenceComponent;
  let fixture: ComponentFixture<AddGrpcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
