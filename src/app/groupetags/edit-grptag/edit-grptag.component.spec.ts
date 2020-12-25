import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrptagComponent } from './edit-grptag.component';

describe('EditGrptagComponent', () => {
  let component: EditGrptagComponent;
  let fixture: ComponentFixture<EditGrptagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrptagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrptagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
