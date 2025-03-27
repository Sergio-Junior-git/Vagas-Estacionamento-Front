export interface ParkingSpot {
  id: number;
  numero: string;
  tipo: string;
  valorporhora: string;
  status: 'Disponivel' | 'Reservada' | 'Ocupada';
  startTime?: Date;
}
