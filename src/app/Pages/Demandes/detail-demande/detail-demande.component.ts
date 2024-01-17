import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.scss']
})
export class DetailDemandeComponent {

  details: any
  demandeId: any

  constructor(private demandeService: DemandeService, private route: ActivatedRoute){}

  ngOnInit(){
    this.demandeId = this.route.snapshot.paramMap.get('id');
    //alert(this.demandeId);
    this.getDetailsList();

  }

  getDetailsList(){
    this.demandeService.getDetailsDemande(this.demandeId).subscribe((res: any) => {
      this.details = res.message
      console.log(this.details)
    })
  }

}
