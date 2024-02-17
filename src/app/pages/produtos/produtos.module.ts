import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [CommonModule, ProdutosRoutingModule, MatCardModule],
})
export class ProdutosModule {}
