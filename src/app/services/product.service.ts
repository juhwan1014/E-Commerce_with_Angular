import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(1,'bouquet type A', 123.00, './assets/images/flower/1.jpg'),
    new Product(2,'bouquet type B', 108.00, './assets/images/flower/2.jpg'),
    new Product(3,'bouquet type C', 98.00, './assets/images/flower/3.jpg'),
    new Product(4,'bouquet type D', 103.00, './assets/images/flower/4.jpg'),
    new Product(5,'Orange line flower bundle', 82.00, './assets/images/flower/5.jpg'),
    new Product(6,'purple flower bundle', 72.00, './assets/images/flower/6.jpg'),
    new Product(7,'Specialized Bundle A', 80.00, './assets/images/flower/7.jpg'),
    new Product(8,'Specialized Bundle B', 100.00, './assets/images/flower/8.jpg'),
    new Product(9,'Specialized Bundle C', 68.00, './assets/images/flower/9.jpg')
]
  constructor() { }

  getProducts(): Product[]{
    return this.products
    } 
}
