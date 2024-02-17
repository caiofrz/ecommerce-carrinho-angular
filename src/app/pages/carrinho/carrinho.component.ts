import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrinho } from 'src/app/interfaces/ItemCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  itensCarrinho: ItemCarrinho[];
  total = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }

  remover(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerDoCarrinho(produtoId);
    this.calculaTotal();
  }

  finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
