
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'cart',component:CartComponent},

{path:'login',component:LoginComponent}
  
];

