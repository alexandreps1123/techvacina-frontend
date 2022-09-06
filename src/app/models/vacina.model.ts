import { Doenca } from "./doenca.model";

export interface Vacina {
  id?: number;
  nome: string;
  doses: number;
  intervaloEntreDoses: number;
  tempoDeEficacia: number;
  doenca: Doenca;
}
