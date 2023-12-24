// Import des modules Angular nécessaires
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { MemberComponent } from '../member/member.component'; // Import d'un composant MemberComponent (non utilisé dans ce code)
import { Member } from '../models/member.model'; // Import du modèle Member

// Définition du composant Angular
@Component({
  selector: 'app-action', // Sélecteur CSS du composant
  templateUrl: './action.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./action.component.scss'] // Tableau des fichiers de style du composant
})
export class ActionComponent implements OnInit {
  // Déclaration de la variable actionForm de type FormGroup
  actionForm!: FormGroup;

  // Déclaration de la variable selectedMember de type string
  selectedMember!: string;

  // Déclaration et initialisation d'une liste de membres
  memberList: Member[] = [
    { Nom: 'Farah YENGUI', Age: 24 },
    { Nom: 'Mariam KAMMOUN', Age: 30 },
    { Nom: 'Mohammed SAID', Age: 48 },
    { Nom: 'Salah TOUNSI', Age: 33 }
  ];

  // Constructeur de la classe avec injection de dépendances
  constructor(
    private fb: FormBuilder, // Service FormBuilder pour la création de formulaires réactifs
    private actionsListService: ServiceService, // ServiceService pour la manipulation des données
    private router: Router // Service Router pour la navigation
  ) { }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Initialisation du formulaire réactif (actionForm)
    this.actionForm = this.fb.group({
      Nom: ['', Validators.required], // Champ Nom avec validation requise
      Objectif: ['', Validators.required], // Champ Objectif avec validation requise
      Responsable: new FormControl(), // Champ Responsable initialisé avec un FormControl
      nbp: ['', Validators.required] // Champ nbp avec validation requise
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Vérification de la validité du formulaire
    if (this.actionForm.valid) {
      // Récupération des données du formulaire
      const formData = this.actionForm.value;

      // Vérification si un responsable est sélectionné
      if (this.selectedMember) {
        // Attribution du responsable aux données du formulaire
        formData.Responsable = this.selectedMember;

        // Affichage des données dans la console (à des fins de débogage)
        console.log(formData);

        // Appel d'une méthode du service pour ajouter les données à la source de données
        this.actionsListService.addToDataSource(formData);

        // Réinitialisation du formulaire après la soumission
        this.actionForm.reset();
      } else {
        // Affichage d'une alerte si aucun responsable n'est sélectionné
        alert('Vous devez choisir un responsable!');
      }
    }
  }
}
