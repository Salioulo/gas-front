import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface TydemandeTResponse{
  id: number
  libelleType: string
  etat: boolean
  created_at: string
  updated_at: string

}
export interface ExerciceResponse{
  id: number
  libelleExer: string
  statut: boolean
  created_at: string
  updated_at: string
}
export interface PaysResponse{
  id: number
  libellePays: string
  etat: boolean
  created_at: string
  updated_at: string
}
export interface UniversiteResponse{
  id: number
  codeUniv: string
  libelleUniv: string
  etat: boolean
  etablissement_id: string
  created_at: string
  updated_at: string
}
export interface EtablissementResponse{
  id: number
  codeEtab: string
  libelleEtab: string
  etat: boolean
  specialite_id: string
  created_at: string
  updated_at: string
}
export interface SpecialiteResponse{
  id: number
  libelleSpec: string
  etat: boolean
  niveau: string
  created_at: string
  updated_at: string
}
export interface NiveauResponse{
  id: number
  libelleNiv: string
  etat: boolean
  created_at: string
  updated_at: string
}


@Injectable({
  providedIn: 'root'
})

export class DemandeService {

  constructor(private httpClient: HttpClient) {}

  getTypeDemandes(){
    return this.httpClient.get('http://localhost:8000/api/typedemande');
  }

  getExercices(){
    return this.httpClient.get('http://localhost:8000/api/exercice');
  }

  getPays(){
    return this.httpClient.get('http://localhost:8000/api/pays');
  }

  getUniversites(){
    return this.httpClient.get('http://localhost:8000/api/universite');
  }
  getEtablissements(){
    return this.httpClient.get('http://localhost:8000/api/etablissement');
  }
  getSpecialites(){
    return this.httpClient.get('http://localhost:8000/api/specialite');
  }
  getNiveau(){
    return this.httpClient.get('http://localhost:8000/api/niveau');
  }

  getEtabByUniv(univId: any){
    return this.httpClient.get('http://localhost:8000/api/universite/'+ univId +'/etablissements');
  }

  getSpecialiteByEtab(specialiteId: any){
    return this.httpClient.get('http://localhost:8000/api/etablissement/'+ specialiteId +'/specialites');
  }

  saveDemande(inputData: Object){
    return this.httpClient.post('http://localhost:8000/api/demande', inputData);
  }

  getSuivieDemande(){
    return this.httpClient.get('http://localhost:8000/api/suivie-demande');
  }

  getDetailsDemande(idDem: any){
    return this.httpClient.get('http://localhost:8000/api/demande/'+ idDem + '/details');
  }

}
