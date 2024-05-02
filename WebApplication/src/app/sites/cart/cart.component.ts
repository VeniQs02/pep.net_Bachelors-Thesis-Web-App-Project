import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CartService} from "../../cart/cart.service";
import {CommonModule} from "@angular/common";
import {Product} from "../../product/product";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: { product: Product, quantity: number }[] = [];



  constructor(private cartService: CartService ) {
    this.cartItems = this.cartService.getCartItems()

  }

  ngOnInit(): void {
    // this.testing();
  }


  getCartItemsNumber(){
    return this.cartService.getCartItemsNumber();
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 0) {
      this.cartItems[index].quantity--;
      this.updateCart();
    }
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.updateCart();
  }

  private updateCart(): void {
    this.cartService.updateCart(this.cartItems);
  }

  testing(){
    console.log(this.cartItems);
    this.cartItems.push(
      {
        product:  new Product("1", "Chleb pszenny", "Chleb pszenny pełnoziarnisty",
          3.5, 50, "Chleby", ['mąka pszenna', 'woda']),
        quantity: 3
      },
      {
        product: new Product("2", "Chleb pszenny", "Chleb pszenny pełnoziarnisty",
          4.5, 20, "Chleby", ['mąka pszenna', 'woda']),
        quantity: 2
      })
  }


}
