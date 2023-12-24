// Import des modules Angular nécessaires pour le routage
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import des composants à associer à chaque itinéraire
import { ActionComponent } from './action/action.component';
import { ActionsListComponent } from './actions-list/actions-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Configuration des itinéraires (routes)
const routes: Routes = [
  // Redirection vers la page de bienvenue en cas de chemin vide
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  
  // Itinéraire pour la page de bienvenue
  { path: 'landing', component: LandingPageComponent },
  
  // Itinéraire pour la page d'ajout d'une action
  { path: 'add-action', component: ActionComponent },
  
  // Itinéraire pour la page de liste des actions
  { path: 'actions-list', component: ActionsListComponent },
];

// Définition du module de routage
@NgModule({
  // Configuration des itinéraires
  imports: [RouterModule.forRoot(routes)],
  
  // Exportation du module de routage pour utilisation dans d'autres parties de l'application
  exports: [RouterModule]
})
export class AppRoutingModule { }
