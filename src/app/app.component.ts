import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatToolbarModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  constructor ( 
    private router: Router,
  ) {

  }

  onClick() {
    this.router.navigate(['/comum'])
  }

  onClick2() {
    this.router.navigate(['/vip'])
  }

  onClick3() {
    this.router.navigate(['/new'])
  }
}
