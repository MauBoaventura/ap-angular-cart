import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'store', component: StoreComponent }, // Rota para a página Sobre
  { path: 'contact', component: HomeComponent }, // Rota para a página de Contato
  { path: '**', component: Error404Component },
  // Você pode adicionar mais rotas aqui conforme necessário
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
