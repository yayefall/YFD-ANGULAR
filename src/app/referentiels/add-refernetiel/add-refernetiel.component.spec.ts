import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefernetielComponent } from './add-refernetiel.component';

describe('AddRefernetielComponent', () => {
  let component: AddRefernetielComponent;
  let fixture: ComponentFixture<AddRefernetielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRefernetielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefernetielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
