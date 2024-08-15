
import { Injectable } from '@angular/core';
import { Food } from '../types/food';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenu(): Food[] {
    return [
      {
        name: "chicken kathi roll",
        image: "/public/assets/chickenkathi.jpg",
        price: 200,
        fav: false,
        quantity: 0,
      },
      {
        name: "Chicken biryani",
        image: "/public/assets/biryani.jpg",
        price: 400,
        fav: false,
        quantity: 0,
      },
      {
        name: "masala dosa",
        image: "/public/assets/masala dosa.jpg",
        price: 80,
        fav: false,
        quantity: 0,
      },
      {
        name: "paneer tikka masala",
        image: "/public/assets/paneer tikka.jpg",
        price: 500,
        fav: false,
        quantity: 0,
      },
      {
        name: "misal pav",
        image: '/public/assets/misal pav.jpg',
        price: 150,
        fav: false,
        quantity: 0,
      },
      {
        name: "chef's special sloopy tacos",
        image: "/public/assets/tacos.jpg",
        price: 400,
        fav: false,
        quantity: 0,
      },
      {
        name: "gulab jamun",
        image: "/public/assets/gulab jamun.jpg",
        price: 200,
        fav: false,
        quantity: 0,
      },
      {
        name: "dhokla",
        image: "/public/assets/dhokla.jpg",
        price: 140,
        fav: false,
        quantity: 0,
      },
      {
        name: "samosa",
        image: "/public/assets/samosa.jpg",
        price: 50,
        fav: false,
        quantity: 0,
      },
      {
        name: "chocochip icecream",
        image: "/public/assets/choco chip icecream.jpg",
        price: 150,
        fav: false,
        quantity: 0,
      },
      {
        name: "vada pav",
        image: "/public/assets/vada pav.jpg",
        price: 25,
        fav: false,
        quantity: 0,
      },
      {
        name: "cold coffee",
        image: "/public/assets/cold coffee.jpg",
        price: 60,
        fav: false,
        quantity: 0,
      },
      {
        name: "Namn",
        image: "/public/assets/naan.jpg",
        price: 110,
        fav: false,
        quantity: 0,
      },
      {
        name: "Dal Makhani",
        image: "/public/assets/dalmakhani.jpeg",
        price: 120,
        fav: false,
        quantity: 0,
      },
      {
        name: "Saag-Paneer",
        image: "/public/assets/Saag-Paneer.webp",
        price: 120,
        fav: false,
        quantity: 0,
      }
    ];
  }
}
