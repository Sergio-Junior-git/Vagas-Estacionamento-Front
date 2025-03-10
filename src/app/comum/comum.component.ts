import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VagasService } from '../services/vagas.service';
import { ParkingSpot } from '../parking-spot';

@Component({
  selector: 'app-comum',
  imports: [FormsModule, CommonModule],
  templateUrl: './comum.component.html',
  styleUrl: './comum.component.css'
})
export class ComumComponent {
  data : any;

  spots: ParkingSpot[] = [];

  filterStatus: string = 'Todos';

  constructor(private vagasService: VagasService){
    this.getVagas()
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

  getFilteredSpots(): ParkingSpot[] {
    return this.spots.filter(spot => spot.tipo === 'Comum');

  }

  getVagas(): void {
    this.vagasService.getAll().subscribe((spots) => this.spots = spots)
  }

}
