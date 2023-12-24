import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActionsList } from '../models/action.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // Création d'une source de données pour le tableau avec le type ActionsList
  private dataSource = new MatTableDataSource<ActionsList>([]);

  // Constructeur du service
  constructor() {}

  // Méthode pour récupérer la source de données
  getDataSource(): MatTableDataSource<ActionsList> {
    return this.dataSource;
  }

  // Méthode pour charger des données dans la source de données
  loadData(data: ActionsList[]): void {
    this.dataSource.data = data;
  }

  // Méthode pour ajouter un élément à la source de données
  addToDataSource(item: ActionsList): void {
    // Ajout de la date actuelle à l'élément avant de l'ajouter à la source de données
    const currentDate = new Date();
    item.date = currentDate;

    // Mise à jour de la source de données avec un nouveau tableau contenant l'élément ajouté
    this.dataSource.data = [...this.dataSource.data, item];
  }

  // Méthode pour supprimer une action de la source de données
  deleteAction(name: string): void {
    // Recherche de l'index de l'action à supprimer
    const index = this.dataSource.data.findIndex((action) => action.Nom === name);

    // Vérification si l'action a été trouvée
    if (index !== -1) {
      // Création d'une nouvelle copie du tableau de données
      const newData = [...this.dataSource.data];

      // Suppression de l'action du tableau
      newData.splice(index, 1);

      // Mise à jour de la source de données avec le nouveau tableau
      this.dataSource.data = newData;
    }
  }
}
