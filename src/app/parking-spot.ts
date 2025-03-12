export interface ParkingSpot {
  id: number;
  numero: string;
  tipo: string;
  valorporhora: string;
  estatos: 'Disponivel' | 'Reservada' | 'Ocupada';
}
