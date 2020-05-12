import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListeComponent } from './create-liste.component';

describe('CreateListeComponent', () => {
  let component: CreateListeComponent;
  let fixture: ComponentFixture<CreateListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
