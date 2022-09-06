import { PostoSaude } from './posto-saude.model';
import { Vacina } from './vacina.model';

export interface LoteVacina {
  id?: number;
  vacina: Vacina;
  quantidade: number;
	recebimento: string;
	validade: string;
	posto: PostoSaude
}
