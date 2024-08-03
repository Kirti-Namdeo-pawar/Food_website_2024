import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



import { MenuService } from './menu/menu.service';

import { CartService } from './cart/cart.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
 standalone:true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MenuService, CartService],
 
})
export class AppComponent {
  title = 'food_website';
  isChatbotVisible: boolean = true;

  openChatbot(): void {
    this.isChatbotVisible = true;
  }

  closeChatbot(): void {
    this.isChatbotVisible = false;
  }
}
