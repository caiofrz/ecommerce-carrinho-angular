import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';
import { enviroment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private readonly baseApiUrl = enviroment.baseApiUrl;
  endpoint = `${this.baseApiUrl}/produtos`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Produto[]>(this.endpoint);
  }

  getOne(id: number) {
    return this.http.get<Produto>(`${this.endpoint}/${id}`);
  }
}
