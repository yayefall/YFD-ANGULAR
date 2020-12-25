import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefernetielComponent } from './list-refernetiel.component';

describe('ListRefernetielComponent', () => {
  let component: ListRefernetielComponent;
  let fixture: ComponentFixture<ListRefernetielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRefernetielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRefernetielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
