// Import des modules Angular nécessaires
import { Component, Input } from '@angular/core';
import { Member } from '../models/member.model'; // Import du modèle Member

// Définition du composant Angular
@Component({
  selector: 'app-member', // Sélecteur CSS du composant
  templateUrl: './member.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./member.component.scss'] // Tableau des fichiers de style du composant
})
export class MemberComponent {
  // Déclaration d'une propriété membres (utilisée comme propriété d'entrée avec @Input())
  @Input()
  members!: Member[]; // Tableau de membres

  // Aucune logique particulière dans le constructeur ou ailleurs, car c'est un composant simple

}
