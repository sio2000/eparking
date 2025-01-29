export interface User {
  id: string;
  email: string;
  name: string;
  points: number;
  parkingHistory: ParkingSpot[];
}

export interface ParkingSpot {
  id: string;
  userId: string;
  size: 'small' | 'medium' | 'large';
  location: {
    lat: number;
    lng: number;
  };
  status: 'available' | 'taken';
  createdAt: Date;
  expiresAt: Date;
}

export interface FilterOptions {
  distance: number;
  size: 'small' | 'medium' | 'large' | 'all';
  accessibility: boolean;
}