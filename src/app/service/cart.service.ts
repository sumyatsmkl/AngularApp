import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public itemList = new BehaviorSubject<any>([]);

  constructor() { }

  getItems(){
    return this.itemList.asObservable();
  }

  setItem(item: any){
    this.cartItemList.push(...item);
    this.itemList.next(item);
  }

  addTocart(item: any){
    this.cartItemList.push(item);
    this.itemList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList)
  }

  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>{
      grandTotal += a.actualPrice;
    })
    return grandTotal;
  }

  removeCartItem(item:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(item.itemId == a.itemId){

        this.cartItemList.splice(index,1);
      }
    })
    this.itemList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.itemList.next(this.cartItemList);
  }
}
