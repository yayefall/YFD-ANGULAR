import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefernetielComponent } from './edit-refernetiel.component';

describe('EditRefernetielComponent', () => {
  let component: EditRefernetielComponent;
  let fixture: ComponentFixture<EditRefernetielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRefernetielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefernetielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
