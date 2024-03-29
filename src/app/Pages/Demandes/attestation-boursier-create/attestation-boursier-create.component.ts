import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DemandeService, TydemandeTResponse, ExerciceResponse, PaysResponse, UniversiteResponse, EtablissementResponse, SpecialiteResponse, NiveauResponse } from 'src/app/Services/demande.service';


@Component({
  selector: 'app-attestation-boursier-create',
  templateUrl: './attestation-boursier-create.component.html',
  styleUrls: ['./attestation-boursier-create.component.scss']
})
export class AttestationBoursierCreateComponent {
  formDem!: FormGroup;
  typeFiles: any [] = []; //nbr input file
  myFiles: any = [];
  files: any [] = [];

  exercice!: any
  paysdem!: any
  typedemande!: any
  universite!: any
  etablissement!: any
  specialite!: any
  niveau!: any
  user: any = 1

  univId: any
  specialiteId: any
  etablisByUniv!: any
  specialitesByEtab!: any

  constructor(private demandeService: DemandeService, private formBuilder: FormBuilder, private route: ActivatedRoute){
    this.formDem = this.formBuilder.group({
      exercice: ['', Validators.required],
      paysdem: ['', Validators.required],
      typedemande: ['', Validators.required],
      universite: ['', Validators.required],
      etablissement: ['', Validators.required],
      specialite: ['', Validators.required],
      niveau: ['', Validators.required],
      files: ['', Validators.required]

    });
  }


  typedemandes!: TydemandeTResponse[];
  exercices!: ExerciceResponse[];
  pays!: PaysResponse[];
  universites!: UniversiteResponse[];
  etablissements!: EtablissementResponse[];
  specialites!: SpecialiteResponse[];
  niveaux!: NiveauResponse[];

  ngOnInit(){
    this.getTypedemandesLists();

    this.getExercicesList();

    this.getPaysList();

    this.getUnivList();

    //this.getEtabList();

    //this.getSpecialiteList();

    this.getNiveauList();

  }

  getTypedemandesLists(){
    this.demandeService.getTypeDemandes().subscribe((res:any) => {
      //console.log(res.typeDemandes);
      this.typedemandes = res.typedemandes
    })
  }


  getExercicesList(){
    this.demandeService.getExercices().subscribe((res:any) => {
      console.log(res.exercices);
      this.exercices = res.exercices
    })
  }

  getPaysList(){
    this.demandeService.getPays().subscribe((res: any) => {
      console.log(res.pays);
      this.pays = res.pays
    })
  }

  getUnivList(){
    this.demandeService.getUniversites().subscribe((res: any) => {
      console.log(res.universites);
      this.universites = res.universites
    })
  }

  getEtabList(){
    this.demandeService.getEtablissements().subscribe((res: any) => {
      console.log(res.etablissements);
      this.etablissements = res.etablissements
    })
  }
  getSpecialiteList(){
    this.demandeService.getSpecialites().subscribe((res: any) => {
      console.log(res.specialites);
      this.specialites = res.specialites
    })
  }
  getNiveauList(){
    this.demandeService.getNiveau().subscribe((res: any) => {
      console.log(res.niveaux);
      this.niveaux = res.niveaux
    })
  }

  uploadFiles(event: any){
    for (var i = 0; i < event.target.files.length; i++){
      this.files.push(event.target.files[i]);
    }

  }

  saveDemande() {

    if(this.formDem.valid) {
     /*var inputData = {
        exercice: this.exercice,
        paysdem: this.paysdem,
        typedemande: this.typedemande,
        universite: this.universite,
        etablissement: this.etablissement,
        specialite: this.specialite,
        niveau: this.niveau,
        user: this.user,
        files: this.files
      }*/

      const inputData = new FormData();
      inputData.append('exercice', this.exercice);
      inputData.append('paysdem', this.paysdem);
      inputData.append('typedemande', this.typedemande);
      inputData.append('universite', this.universite);
      inputData.append('etablissement', this.etablissement);
      inputData.append('specialite', this.specialite);
      inputData.append('niveau', this.niveau);
      inputData.append('user', this.user);

      for(var i =  0; i < this.files.length; i++)
       {
        inputData.append('files[]', this.files[i]);
        console.log(this.files[i])
      }

      console.log(inputData)
      //console.log(this.files)
      this.demandeService.saveDemande(inputData).subscribe({
        next: (res: any) => {
          console.log(res, 'response');
          alert(res.message);
          this.exercice = '';
          this.paysdem = '';
          this.typedemande = '';
          this.universite = '';
          this.etablissement = '';
          this.specialite = '';
          this.niveau = '';
          this.files = [];
        },
        error: (err: any) => {
          //this.errors = err.error.errors;
          console.log(err);
          alert(err.error.errors.files);

        }
      })

    }
  }

  //Get Etablissement By universite
  onSelectEtabByUniv(event: any){
    this.univId = event.target.value;
    console.log(this.univId);
    if(this.univId)
    this.demandeService.getEtabByUniv(this.univId).subscribe((res: any) =>{
      console.log(res.message)
      this.etablisByUniv = res.message
    })
  }

  onSelectSpeByEtab(event: any){
    this.specialiteId = event.target.value;
    console.log(this.specialiteId);
    if(this.specialiteId)
    this.demandeService.getSpecialiteByEtab(this.specialiteId).subscribe((res: any) =>{
      console.log(res.message)
      this.specialitesByEtab = res.message
    })
  }

  onSelectTypeDem(event: any){
    let type = event.target.value;
    //console.log(event.target.value);

    if(type == 1 || type == 2){
      this.typeFiles = [
        'CNI',
        'Demande',
        'Attestation Inscription'
      ];
    } else {
      this.typeFiles = [
        'CNI',
        'Diplome',
        'Attestation Bancaire',
        'Lettre de prise en charge',
        'Attestation imposition',
        'Pré-Inscription',
        'Bulletin 1',
        'Bulletin 2',
        'Bulletin 3',
      ];
    }
  }

}
