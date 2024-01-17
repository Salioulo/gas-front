import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavBarComponent } from './Pages/Partials/nav-bar/nav-bar.component';
import { TypeDemandeListComponent } from './Pages/type-demande-list/type-demande-list.component';
import { AttestationSortieCreateComponent } from './Pages/Demandes/attestation-sortie-create/attestation-sortie-create.component';
import { AttestationBoursierCreateComponent } from './Pages/Demandes/attestation-boursier-create/attestation-boursier-create.component';
import { AttestationNonBoursierCreateComponent } from './Pages/Demandes/attestation-non-boursier-create/attestation-non-boursier-create.component';
import { SuivieDemandeComponent } from './Pages/Demandes/suivie-demande/suivie-demande.component';
import { DetailDemandeComponent } from './Pages/Demandes/detail-demande/detail-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    TypeDemandeListComponent,
    AttestationSortieCreateComponent,
    AttestationBoursierCreateComponent,
    AttestationNonBoursierCreateComponent,
    SuivieDemandeComponent,
    DetailDemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
