import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpcompetenceComponent } from './list-grpcompetence.component';

describe('ListGrpcompetenceComponent', () => {
  let component: ListGrpcompetenceComponent;
  let fixture: ComponentFixture<ListGrpcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
