import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [
    MatButton,

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {


  constructor(
    private router: Router
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
