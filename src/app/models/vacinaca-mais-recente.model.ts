import { Cliente } from "./cliente.model";
import { Doenca } from "./doenca.model";
import { VacinacaoFeita } from "./vacinacao-feita.model";

export interface VacinacaoMaisRecente {
  id?: number;
  cliente: Cliente;
	doenca: Doenca;
	vacinacao: VacinacaoFeita;
	dataPrevistaPraxima: string;
}
