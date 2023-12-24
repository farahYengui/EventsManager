import { Member } from '../models/member.model'; // Assurez-vous que le chemin est correct

export interface ActionsList {
  Nom: string;
  Objectif: string;
  Responsable: Member; // Utilisation du modèle Member au lieu de MemberComponent
  nbp: number;
  date: Date;
  action: any;
  status: boolean;
}
