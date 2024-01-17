import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationNonBoursierCreateComponent } from './attestation-non-boursier-create.component';

describe('AttestationNonBoursierCreateComponent', () => {
  let component: AttestationNonBoursierCreateComponent;
  let fixture: ComponentFixture<AttestationNonBoursierCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttestationNonBoursierCreateComponent]
    });
    fixture = TestBed.createComponent(AttestationNonBoursierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
