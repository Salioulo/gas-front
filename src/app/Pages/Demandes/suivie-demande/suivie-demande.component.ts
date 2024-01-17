import { Component } from '@angular/core';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-suivie-demande',
  templateUrl: './suivie-demande.component.html',
  styleUrls: ['./suivie-demande.component.scss']
})
export class SuivieDemandeComponent {
  demandes: any

  constructor(private demandeservice: DemandeService){}

  ngOnInit(){
    this.getSuivieDemandeList();
  }

  getSuivieDemandeList(){
    this.demandeservice.getSuivieDemande().subscribe((res: any) => {
      console.log(res);
      this.demandes = res.message;
    })
  }

}
