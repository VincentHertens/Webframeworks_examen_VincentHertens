import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}

   getAllProducts() {
      return [{name:"Product1", brand:"Brand1", description: "Description1", price: 1},{name:"Product2", brand:"Brand2", description: "Description2", price: 2}];
;   }
}
