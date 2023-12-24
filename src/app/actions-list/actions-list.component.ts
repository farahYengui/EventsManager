// Import des modules Angular nécessaires
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'; // Composant de pagination Material
import { MatSort } from '@angular/material/sort'; // Composant de tri Material
import { MatTableDataSource } from '@angular/material/table'; // Composant de tableau Material
import { ActionsList } from '../models/action.model'; // Modèle pour les actions
import { ServiceService } from '../services/service.service'; // Service pour la manipulation des données

// Définition du composant Angular
@Component({
  selector: 'app-actions-list', // Sélecteur CSS du composant
  templateUrl: './actions-list.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./actions-list.component.scss'] // Tableau des fichiers de style du composant
})
export class ActionsListComponent implements OnInit {
  // Déclaration des colonnes à afficher dans le tableau
  displayedColumns: string[] = ['Nom', 'Objectif', 'Responsable', 'nbp', 'date', 'action'];

  // Initialisation du dataSource avec les données du service
  dataSource = this.service.getDataSource();

  // Déclaration des composants de pagination et de tri en utilisant @ViewChild
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Constructeur de la classe avec injection de dépendances
  constructor(private service: ServiceService) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Récupération des données du service pour le dataSource
    this.dataSource = this.service.getDataSource();

    // Attribution du composant de pagination et de tri au dataSource
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Connexion au dataSource pour afficher les données dans le tableau
    this.service.getDataSource().connect().subscribe();
  }

  // Méthode appelée lors de la suppression d'une action
  onDeleteAction(name: string): void {
    // Appel d'une méthode du service pour supprimer l'action
    this.service.deleteAction(name);

    // Connexion au dataSource pour mettre à jour les données dans le tableau
    this.service.getDataSource().connect().subscribe();
  }
}
