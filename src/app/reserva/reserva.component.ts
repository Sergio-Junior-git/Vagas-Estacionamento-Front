import { Component } from '@angular/core';
import { ParkingSpot } from '../parking-spot';
import { VagasService } from '../services/vagas.service';


@Component({
  selector: 'app-reserva',
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {


  spots: ParkingSpot[] = [];

   constructor(private vagasService: VagasService){
     this.getVagas()
    }

    
  getVagas(): void {
    this.vagasService.getAll().subscribe((spots) => this.spots = spots)
  }

}
