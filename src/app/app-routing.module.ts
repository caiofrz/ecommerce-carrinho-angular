import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produtos/produtos.module').then((m) => m.ProdutosModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./pages/carrinho/carrinho.module').then((m) => m.CarrinhoModule),
  },
  { path: 'contato', loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule) },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found-404/not-found-404.module').then(
        (m) => m.NotFound404Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
