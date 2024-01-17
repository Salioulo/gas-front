import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieDemandeComponent } from './suivie-demande.component';

describe('SuivieDemandeComponent', () => {
  let component: SuivieDemandeComponent;
  let fixture: ComponentFixture<SuivieDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuivieDemandeComponent]
    });
    fixture = TestBed.createComponent(SuivieDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
