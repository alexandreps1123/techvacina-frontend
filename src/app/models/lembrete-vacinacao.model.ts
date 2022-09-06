import { Cliente } from "./cliente.model";
import { Doenca } from "./doenca.model";

export interface LembreteVacinacao {
  id?: number;
  cliente: Cliente;
	doenca: Doenca;
	data: string;
}
