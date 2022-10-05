import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { CustomerorderService } from 'src/app/services/customerorder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


products : Array<Product> = [];
  product : FormGroup;

  constructor(private service : CustomerorderService) {
    this.product=new FormGroup({
      id : new FormControl('',Validators.required),
      productname : new FormControl('',Validators.required),
      qty : new FormControl('',Validators.required)
      
         })
        }

  ngOnInit(): void {
  }
  addProduct()
  {
  this.service.addProduct(this.product.value).subscribe((res:Product)=>{
    })
  
  }

}
