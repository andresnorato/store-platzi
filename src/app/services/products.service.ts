import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  CreateProductDTO,
  Product,
} from '../models/product.model';
import { retry, retryWhen } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      console.log(limit, offset);
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http
      .get<Product[]>(`${this.apiUrl}`, { params })
      .pipe(retry(3));
  }

  getProductDetail(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  // getProductsByPage() {
  //   return this.http.get<Product[]>(`${this.apiUrl}`, {
  //     params: { limit, offset },
  //   });
  // }

  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: any) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
