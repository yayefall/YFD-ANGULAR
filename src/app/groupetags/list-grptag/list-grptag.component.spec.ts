import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrptagComponent } from './list-grptag.component';

describe('ListGrptagComponent', () => {
  let component: ListGrptagComponent;
  let fixture: ComponentFixture<ListGrptagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrptagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrptagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
