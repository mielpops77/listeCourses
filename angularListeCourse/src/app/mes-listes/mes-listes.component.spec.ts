import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesListesComponent } from './mes-listes.component';

describe('MesListesComponent', () => {
  let component: MesListesComponent;
  let fixture: ComponentFixture<MesListesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesListesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
