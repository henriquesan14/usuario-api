enum Escolaridade {
    Infantil = 1,
    Fundamental = 2,
    Medio = 3,
    Superior = 4
  }
export interface Usuario {
    id: number;
    nome: string;
    sobrenome: string ;
    email: string;
    data: string;
    escolaridade: Escolaridade
}
