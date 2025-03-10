import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingSpot } from '../parking-spot';
import { VagasService } from '../services/vagas.service';

@Component({
  selector: 'app-vagavip',
  imports: [CommonModule, FormsModule],
  templateUrl: './vagavip.component.html',
  styleUrl: './vagavip.component.css'
})
export class VagavipComponent {


    spots: ParkingSpot[] = [];

    filterStatus: string = 'Todos';

    constructor(private vagasService: VagasService) {
      this.getVagas()
    }


  getFilteredSpots() {
    return this.spots.filter(spot => spot.tipo === 'Vip', 'VIP');

} 

reserveSpot(id: number) {
  this.spots = this.spots.map(spot =>
    spot.id === id && spot.estatos === 'Disponivel' ? { ...spot, estatos: 'Reservada' } : spot
  );
}

releaseSpot(id: number) {
  this.spots = this.spots.map(spot =>
    spot.id === id && spot.estatos === 'Reservada' ? { ...spot, estatos: 'Disponivel' } : spot
  );
}

OcuparSpot(id: number) {
  this.spots = this.spots.map(spot =>
    spot.id === id && spot.estatos === 'Disponivel' ? { ...spot, estatos: 'Ocupada' } : spot
  );
}

DisponiSpot(id: number) {
  this.spots = this.spots.map(spot =>
    spot.id === id && spot.estatos === 'Ocupada' ? { ...spot, estatos: 'Disponivel' } : spot
  );
}

getVagas(): void {
  this.vagasService.getAll().subscribe((spots) => this.spots = spots)
}

}
