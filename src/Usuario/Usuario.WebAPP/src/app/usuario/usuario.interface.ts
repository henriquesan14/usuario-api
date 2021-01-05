enum Escolaridade {
    House = 1,
    Apartment = 2,
    Flat = 3
  }
export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string ;
    email: string;
    data: string;
    escolaridade: Escolaridade
}