import { Component } from '@angular/core';
import { DemandeService, TydemandeTResponse } from 'src/app/Services/demande.service';


@Component({
  selector: 'app-type-demande-list',
  templateUrl: './type-demande-list.component.html',
  styleUrls: ['./type-demande-list.component.scss']
})
export class TypeDemandeListComponent {

  constructor(private demandeService: DemandeService){}

  typedemandes!: TydemandeTResponse[];

  ngOnInit(){
    this.getTypedemandesLists();

  }

  getTypedemandesLists(){
    this.demandeService.getTypeDemandes().subscribe((res:any) => {
      console.log(res.typeDemandes);
      this.typedemandes = res.typeDemandes
    })
  }


}
