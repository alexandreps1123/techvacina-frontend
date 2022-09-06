import { Endereco } from "./endereco.model";

export interface PostoSaude {
  id?: number;
  nome: string;
	endereco: Endereco;
}
