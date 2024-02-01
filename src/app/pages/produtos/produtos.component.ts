import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { mockProdutos } from 'src/app/mock/mock-produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos: Produto[] = mockProdutos;

}
