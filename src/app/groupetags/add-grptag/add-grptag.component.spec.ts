import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrptagComponent } from './add-grptag.component';

describe('AddGrptagComponent', () => {
  let component: AddGrptagComponent;
  let fixture: ComponentFixture<AddGrptagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrptagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrptagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
