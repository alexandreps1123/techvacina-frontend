import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinasFuturasComponent } from './vacinas-futuras.component';

describe('VacinasFuturasComponent', () => {
  let component: VacinasFuturasComponent;
  let fixture: ComponentFixture<VacinasFuturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinasFuturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinasFuturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
