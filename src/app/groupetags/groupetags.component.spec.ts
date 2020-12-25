import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupetagsComponent } from './groupetags.component';

describe('GroupetagsComponent', () => {
  let component: GroupetagsComponent;
  let fixture: ComponentFixture<GroupetagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupetagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupetagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
