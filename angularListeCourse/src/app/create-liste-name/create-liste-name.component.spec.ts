import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListeNameComponent } from './create-liste-name.component';

describe('CreateListeNameComponent', () => {
  let component: CreateListeNameComponent;
  let fixture: ComponentFixture<CreateListeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
