import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/Produto';
import { mockProdutos } from 'src/app/mock/mock-produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos$!: Produto[];
  produtosSearch!: Produto[];

  constructor(private service: ProdutosService, private route: ActivatedRoute) {


    this.service
      .getAll()
      .subscribe((produtos) => (this.produtosSearch = produtos));
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();

      if (descricao) {
        this.produtosSearch = this.produtosSearch.filter((produto) =>
          produto.nome.toLowerCase().includes(descricao)
        );
      }
      this.produtos$ = this.produtosSearch;
    });
  }
}
