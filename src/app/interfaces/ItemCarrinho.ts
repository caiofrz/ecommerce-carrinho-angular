import { Produto } from './Produto';

export interface ItemCarrinho extends Produto {
  quantidade: number;
}
