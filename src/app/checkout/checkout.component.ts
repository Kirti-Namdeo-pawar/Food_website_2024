import { Component,Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Food } from '../types/food';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,CartComponent,],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers:[CartService],
})
export class CheckoutComponent {
  cartItems: Food[] = [];
  totalQuantity: number = 0;
  totalCost: number = 0;
  paymentMethod: string = 'Visa';
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as {
      cartItems: Food[],
      totalQuantity: number,
      totalCost: number
    };
    if (state) {
      this.cartItems = state.cartItems;
      this.totalQuantity = state.totalQuantity;
      this.totalCost = state.totalCost;
    }
  }

  ngOnInit(): void {
    // Additional initialization if needed
  }
  onBuyNow(): void {
    // Here, you would integrate with your payment gateway.
    // For this example, we'll simply log the details and navigate to a confirmation page.
    console.log('Payment Method:', this.paymentMethod);
    console.log('Cart Items:', this.cartItems);
    console.log('Total Quantity:', this.totalQuantity);
    console.log('Total Cost:', this.totalCost);

    // Simulate a successful payment
    alert('Payment successful!');

    // Navigate to a confirmation page (replace 'confirmation' with your actual route)
    this.router.navigate(['/confirmation'], {
      state: {
        cartItems: this.cartItems,
        totalQuantity: this.totalQuantity,
        totalCost: this.totalCost,
        paymentMethod: this.paymentMethod
      }
    });
  }
  onBack(): void {
    this.router.navigate(['/menu'], {
      state: {
        cartItems: this.cartItems,
        totalQuantity: this.totalQuantity,
        totalCost: this.totalCost
      }
    });
  }
}
