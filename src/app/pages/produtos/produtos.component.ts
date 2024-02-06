import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/Produto';
import { mockProdutos } from 'src/app/mock/mock-produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  produtos$!: Observable<Produto[]>;

  constructor(private service: ProdutosService){
    this.produtos$ = this.service.getAll();
  }

}
