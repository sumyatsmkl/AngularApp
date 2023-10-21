import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public itemList: any;
  constructor(private auth:AuthService, private cartService:CartService)
  {

  }

  ngOnInit():void{
    this.auth.getAllItems().subscribe(res=>{
      this.itemList = res;

      this.itemList.forEach((a:any) => {
        Object.assign(a,{orderQty:1});
      });
    })
  }

  addToCart(item:any)
  {
    alert("Added to your shopping cart!");
    this.cartService.addTocart(item);
  }
}
