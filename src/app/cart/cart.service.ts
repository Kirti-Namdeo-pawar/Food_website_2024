import { Injectable } from '@angular/core';
import { Food } from '../types/food';
import { MenuService } from '../menu/menu.service';
@Injectable({
  providedIn: 'root',
  
})
export class CartService {

  private cartItems: Food[] = [];

  getCartItems(): Food[] {
    return this.cartItems;
  }

  updateCartItem(dish: Food): void {
    const existingDish = this.cartItems.find(item => item.name === dish.name);
    if (existingDish) {
      existingDish.quantity += 1;
    } else  {
      dish.quantity = 1;
      this.cartItems.push(dish);
    }
  }

  removeCartItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  incrementQuantity(dish: Food): void {
    const existingDish = this.cartItems.find(item => item.name === dish.name);
    if (existingDish) {
      existingDish.quantity += 1;
    }
  }

  decrementQuantity(dish: Food): void {
    const existingDish = this.cartItems.find(item => item.name === dish.name);
    if (existingDish && existingDish.quantity > 1) {
      existingDish.quantity -= 1;
    }
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalCost(): number {
    return this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

}
