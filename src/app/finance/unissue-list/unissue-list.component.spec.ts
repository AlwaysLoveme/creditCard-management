import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnissueListComponent } from './unissue-list.component';

describe('UnissueListComponent', () => {
  let component: UnissueListComponent;
  let fixture: ComponentFixture<UnissueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnissueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnissueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
