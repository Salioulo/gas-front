import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { TypeDemandeListComponent } from './Pages/type-demande-list/type-demande-list.component';
import { AttestationBoursierCreateComponent } from './Pages/Demandes/attestation-boursier-create/attestation-boursier-create.component';
import { SuivieDemandeComponent } from './Pages/Demandes/suivie-demande/suivie-demande.component';
import { DetailDemandeComponent } from './Pages/Demandes/detail-demande/detail-demande.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home page' },
  { path: 'nouvelle/demande/attestation', component: AttestationBoursierCreateComponent, title: 'demande attestation'},
  { path: 'universite/:id/etablissements', component: AttestationBoursierCreateComponent, title: 'etablissements par univ'},
  { path: 'etablissement/:id/specialite', component: AttestationBoursierCreateComponent, title: 'specialite par etab'},
  { path: 'typedemande/list', component: TypeDemandeListComponent, title: 'Type demande liste'},
  { path: 'suivie-demande/list', component: SuivieDemandeComponent, title: 'Liste demande'},
  { path: 'demande/:id/details', component: DetailDemandeComponent, title: 'Detail demande'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
