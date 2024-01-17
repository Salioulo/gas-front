import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationBoursierCreateComponent } from './attestation-boursier-create.component';

describe('AttestationBoursierCreateComponent', () => {
  let component: AttestationBoursierCreateComponent;
  let fixture: ComponentFixture<AttestationBoursierCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttestationBoursierCreateComponent]
    });
    fixture = TestBed.createComponent(AttestationBoursierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
