import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraAppComponent } from './cabecera-app.component';

describe('CabeceraAppComponent', () => {
  let component: CabeceraAppComponent;
  let fixture: ComponentFixture<CabeceraAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabeceraAppComponent]
    });
    fixture = TestBed.createComponent(CabeceraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
