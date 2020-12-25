import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompentenceComponent } from './edit-compentence.component';

describe('EditCompentencComponent', () => {
  let component: EditCompentenceComponent;
  let fixture: ComponentFixture<EditCompentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
