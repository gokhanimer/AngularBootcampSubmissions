import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { CustomerorderService } from 'src/app/services/customerorder.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products : Array<Product> = [];
  constructor(private service : CustomerorderService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      (res:any)=>
      {
        this.products=res;
      }
    )
  }

}
