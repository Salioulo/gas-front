import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from 'src/app/Services/demande.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.scss']
})
export class DetailDemandeComponent {

  constructor(private demandeService: DemandeService, private route: ActivatedRoute){}
  details: any
  documents: any
  demandeId: any
  fileId: any
  fileName = '';

  ngOnInit(){
    this.demandeId = this.route.snapshot.paramMap.get('id');
    //this.fileId = this.route.snapshot.paramMap.get('idFile');
    //alert(this.demandeId);
    this.getDetailsList();

  }

  getDetailsList(){
    this.demandeService.getDetailsDemande(this.demandeId).subscribe((res: any) => {
      this.details = res.message
      this.documents = res.docs
      //console.log(this.details)
      //console.log(this.documents)
    })
  }
  downloadMyFile(nomFile: any){
    console.log(nomFile)
    this.demandeService.downloadFile(nomFile).subscribe((res: any) => {
      console.log(res)

    })

  }

}
