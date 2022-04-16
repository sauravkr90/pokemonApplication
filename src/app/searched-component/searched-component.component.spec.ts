import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedComponentComponent } from './searched-component.component';

describe('SearchedComponentComponent', () => {
  let component: SearchedComponentComponent;
  let fixture: ComponentFixture<SearchedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
