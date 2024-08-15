import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuService } from './menu/menu.service';

import { CartService } from './cart/cart.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
 standalone:true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MenuService, CartService],
 
})
export class AppComponent {
  title = 'food_website';
  isChatbotVisible: boolean = true;
  searchQuery: string = '';
  constructor(private router: Router) {}
  onSearch(): void {
    this.router.navigate(['/menu'], { queryParams: { search: this.searchQuery } });
  }
  openChatbot(): void {
    this.isChatbotVisible = true;
  }

  closeChatbot(): void {
    this.isChatbotVisible = false;
  }
}
