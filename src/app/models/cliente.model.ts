import { Endereco } from "./endereco.model";

export interface Cliente {
  id?: number;
  nome : string;
	cpf : string;
	endereco : Endereco;
	telefone : string;
}
