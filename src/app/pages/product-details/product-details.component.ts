import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  produto!: Produto;
  quantidade: number = 1;
  constructor(
    private service: ProdutosService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private carrinhoService: CarrinhoService
  ) {
    const routeParams = this.route.snapshot.paramMap;

    const produtoId = Number(routeParams.get('id'));
    this.service
      .getOne(produtoId)
      .subscribe((produto) => (this.produto = produto));
  }

  adicionarAoCarrinho() {
    this.carrinhoService.adicionarAoCarrinho({
      ...this.produto,
      quantidade: this.quantidade,
    });
    this.snackBar.open('Produto adicionado ao carrinho', 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
