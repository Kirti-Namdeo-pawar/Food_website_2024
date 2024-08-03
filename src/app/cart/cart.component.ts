import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Food } from '../types/food';
import { MenuService } from '../menu/menu.service';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MenuComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[CartService,MenuService]
})
export class CartComponent {
  @Input() dishes: Food[] = [];
  totalQuantity: number = 0;
  totalCost: number = 0;
  @Output() addToCart = new EventEmitter<Food>();
  @Output() updateCartItem = new EventEmitter<Food>();
  @Output() removeFromCart = new EventEmitter<number>();

  increaseQuantity(dish: Food): void {
    dish.quantity += 1;
    this.updateCartItem.emit(dish);
  }

  decreaseQuantity(dish: Food): void {
    if (dish.quantity > 0) {
      dish.quantity -= 1;
      this.updateCartItem.emit(dish);
    }
  }

  removeItem(index: number): void {
    this.removeFromCart.emit(index);
  }
}
