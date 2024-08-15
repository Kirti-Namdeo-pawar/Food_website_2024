import { Component,Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { Food } from '../types/food';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
declare var Razorpay: any;
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
  onBuyNow() {
    const options = {
      "key": "your_razorpay_key_id", // Enter the Key ID generated from the Razorpay Dashboard
      "amount": this.totalCost * 100, // Amount is in currency subunits. Default currency is INR. Hence, the amount is in paise.
      "currency": "INR",
      "name": "Your Company Name",
      "description": "Purchase Description",
      "image": "path_to_logo",
      "handler": (response: any) => {
        console.log(response);
        alert('Payment Successful');
        // Handle post-payment actions here
      },
      "prefill": {
        "name": "Your Name",
        "email": "your_email@example.com",
        "contact": "1234567890"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    
    const rzp1 = new Razorpay(options);
    rzp1.open();
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
