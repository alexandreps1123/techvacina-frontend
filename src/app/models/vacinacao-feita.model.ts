import { Cliente } from './cliente.model';
import { Doenca } from './doenca.model';
import { LoteVacina } from './lote-vacina.model';
import { PostoSaude } from './posto-saude.model';
import { Vacina } from './vacina.model';

export interface VacinacaoFeita {
  id?: number;
  vacina: Vacina;
  lote: LoteVacina;
  dose: number;
  cliente: Cliente;
  doenca: Doenca;
  data: string;
  posto: PostoSaude;
}
