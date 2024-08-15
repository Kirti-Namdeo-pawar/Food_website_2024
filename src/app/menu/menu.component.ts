import { Component ,OnInit} from '@angular/core';
import { MenuService } from './menu.service';
//import { RouterModule } from '@angular/router';

import { Router, ActivatedRoute } from '@angular/router';

import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { Food } from '../types/food';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule ,CartComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [MenuService,CartService]
})

 
  export class MenuComponent implements OnInit {
    recipes: Food[] = [];
    isShowing: boolean = true;
    filteredRecipes: Food[] = [];
    cartItems: Food[] = [];
    totalQuantity: number = 0;
    totalCost: number = 0;
  
  
    constructor(private menuservice: MenuService,
      private CartService: CartService,
      private route: ActivatedRoute,
      private router: Router) {}
  
    ngOnInit(): void {
      this.recipes = this.menuservice.getMenu();
      this.route.queryParams.subscribe(params => {
        const searchQuery = params['search'] || '';
        this.filteredRecipes = this.recipes.filter(dish => dish.name.toLowerCase().includes(searchQuery.toLowerCase()));
      });
    }
   
    /*addToCart(dish: Food): void {
      const existingDish = this.cartItems.find(item => item.name === dish.name);
      if (existingDish) {
        existingDish.quantity += 1;
      } else {
        dish.quantity = 1;
        this.cartItems.push(dish);
      }
      this.updateCartTotals();
    }
  */
    updateCartTotals(): void {
      this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
      this.totalCost = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    }
  
    checkout(): void {
      this.router.navigate(['/checkout'], {
        state: {
          cartItems: this.cartItems,
          totalQuantity: this.totalQuantity,
          totalCost: this.totalCost
        }
      });}
    
    removeFromCart(index: number): void {
      this.cartItems.splice(index, 1);
      this.updateCartTotals();
    }
     addToCart(dish: Food): void {
    const existingDish = this.cartItems.find(item => item.name === dish.name);
    if (existingDish) {
      existingDish.quantity += 1;
    } else {
      dish.quantity = 1;
      this.cartItems.push(dish);
    }
    this.updateCartTotals();
  }

  updateCartItem(dish: Food): void {
    const index = this.cartItems.findIndex(item => item.name === dish.name);
    if (index !== -1) {
      this.cartItems[index].quantity = dish.quantity;
      if (this.cartItems[index].quantity === 0) {
        this.cartItems.splice(index, 1);
      }
    }
    this.updateCartTotals();
  }
  }
  

