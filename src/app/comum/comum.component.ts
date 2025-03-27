import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VagasService } from '../services/vagas.service';
import { ParkingSpot } from '../parking-spot';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comum',
  imports: [FormsModule, CommonModule],
  templateUrl: './comum.component.html',
  styleUrl: './comum.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComumComponent implements OnInit {
  data : any;

  spots: ParkingSpot[] = [];

  filterStatus: string = 'Todos';

  constructor(
    private vagasService: VagasService,
    private router: Router
  ){
    this.getVagas()
  }

  reserveSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Disponivel' ? { ...spot, status: 'Reservada' } : spot
    );
  }

  releaseSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Reservada' ? { ...spot, status: 'Disponivel' } : spot
    );
  }

  OcuparSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Disponivel' ? { ...spot, status: 'Ocupada' } : spot
    );
  }
 
  DisponiSpot(id: number) {
    this.spots = this.spots.map(spot =>
      spot.id === id && spot.status === 'Ocupada' ? { ...spot, status: 'Disponivel' } : spot
    );
  }

  getFilteredSpots(): ParkingSpot[] {
    return this.spots.filter(spot => spot.tipo === 'Comum');

  }

  getVagas(): void {
    this.vagasService.getAll().subscribe((spots) => this.spots = spots)
  }

  OnReserva() {
   this.router.navigate(['/reserva']) 
  }

  ngOnInit() {
      
  }

}
