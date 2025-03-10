export interface ParkingSpot {
  id: number;
  numero: string;
  tipo: string;
  valorPorHora: string;
  estatos: 'Disponivel' | 'Reservada' | 'Ocupada' | 'Livre';
}
