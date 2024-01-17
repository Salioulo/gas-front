import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationSortieCreateComponent } from './attestation-sortie-create.component';

describe('AttestationSortieCreateComponent', () => {
  let component: AttestationSortieCreateComponent;
  let fixture: ComponentFixture<AttestationSortieCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttestationSortieCreateComponent]
    });
    fixture = TestBed.createComponent(AttestationSortieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
