import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompentenceComponent } from './add-compentence.component';

describe('AddCompentencComponent', () => {
  let component: AddCompentenceComponent;
  let fixture: ComponentFixture<AddCompentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
