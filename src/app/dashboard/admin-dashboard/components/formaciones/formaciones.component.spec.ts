import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionesComponent } from './formaciones.component';

describe('FormacionesComponent', () => {
  let component: FormacionesComponent;
  let fixture: ComponentFixture<FormacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
