import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  scrollDown() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  }
}
