import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompentenceComponent } from './list-compentence.component';

describe('ListCompentencComponent', () => {
  let component: ListCompentenceComponent;
  let fixture: ComponentFixture<ListCompentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
