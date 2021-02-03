export interface Referentiel {
  id: number;
  libelle: string;
  presentation: string;
  programme: Blob;
  critereAdmission: string;
  critereEvaluation: string;
  groupeCompetences: any;
}
