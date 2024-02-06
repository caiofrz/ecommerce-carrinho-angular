import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
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
    private snackBar: MatSnackBar
  ) {
    const routeParams = this.route.snapshot.paramMap;

    const produtoId = Number(routeParams.get('id'));
    console.log(this.service.getOne(produtoId));
    this.service
      .getOne(produtoId)
      .subscribe((produto) => (this.produto = produto));
  }

  adicionarAoCarrinho() {
    this.snackBar.open('Produto adicionado ao carrinho', 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
