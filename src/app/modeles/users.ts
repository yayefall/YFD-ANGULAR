export interface Users {
  id: number;
  nom: string;
  prenon: string;
  username: string;
  photo: string;
  email: string;
  profils:
    {
      libelle: string;
    };
  genre: string;
  telephone: string;
  token: string;
}
