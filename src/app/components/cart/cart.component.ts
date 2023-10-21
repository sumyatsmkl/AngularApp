import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public selectedItemList: any = [];
  public grandTotal!: number;
  constructor(private cartService: CartService,private authService: AuthService){}

  ngOnInit():void{
    this.cartService.getItems().subscribe(res =>
      {        
        this.selectedItemList = res;
        this.grandTotal = this.cartService.getTotalPrice();
        console.log("Total Amount:" + this.grandTotal);
      })
  }

  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

  submitOrder(){
    alert("No code implementation for this Submit Order button");
    //this.selectedItemList = this.cartService.getItems();
    //console.log("from submit order click" + this.selectedItemList);
    //this.authService.submitOrder(this.selectedItemList);
    
  }

}
