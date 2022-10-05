import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CustomerorderService {
private endpoint = 'http://localhost:3000/product';

  products : Array<Product>=[];
  subject : BehaviorSubject<Array<Product>>;

  constructor(private http : HttpClient) {
    this.getProdFromServer();
    this.subject=new BehaviorSubject<Array<Product>>([]);
   }

   fetchProduct()
   {
    
     return this.http.get<Array<Product>>('http://localhost:3000/product',
      ).subscribe
     (
       (res:any)=>
       {
          this.products=res;
          this.subject?.next(this.products);
 
       },
       (err:any)=> this.subject?.error(err)
     )
   }
 
getProdFromServer(){
  return this.http.get<Product[]>(this.endpoint).subscribe(api => {
    this.products = api;
    this.subject.next(this.products);
  })
}
  getProducts() : Observable<Product[]>
  {
  return this.subject;
  }

  addProduct(product : Product) : Observable<Product>
  {
  return  this.http.post<Product>("http://localhost:3000/product",product).
      pipe
      (
        tap( (res:any)=>
        {
          this.products.push(res);
          this.subject.next(this.products);
          return this.subject;
        }
      )
      )

}

}
