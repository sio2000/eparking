import { create } from 'zustand';
import { ParkingSpot, FilterOptions } from '../types';

interface ParkingState {
  spots: ParkingSpot[];
  filteredSpots: ParkingSpot[];
  filterOptions: FilterOptions;
  setSpots: (spots: ParkingSpot[]) => void;
  setFilterOptions: (options: Partial<FilterOptions>) => void;
  addSpot: (spot: ParkingSpot) => void;
  removeSpot: (spotId: string) => void;
}

// Add some initial mock data
const mockSpots: ParkingSpot[] = [
  {
    id: '1',
    userId: 'user1',
    size: 'medium',
    location: {
      lat: 40.7128,
      lng: -74.0060,
    },
    status: 'available',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 30 * 60000),
  },
  {
    id: '2',
    userId: 'user2',
    size: 'large',
    location: {
      lat: 40.7148,
      lng: -74.0068,
    },
    status: 'available',
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 45 * 60000),
  },
];

export const useParkingStore = create<ParkingState>((set) => ({
  spots: mockSpots,
  filteredSpots: mockSpots,
  filterOptions: {
    distance: 1000,
    size: 'all',
    accessibility: false,
  },
  setSpots: (spots) => set({ spots, filteredSpots: spots }),
  setFilterOptions: (options) =>
    set((state) => {
      const newOptions = { ...state.filterOptions, ...options };
      const filtered = state.spots.filter((spot) => {
        if (newOptions.size === 'all') return true;
        return spot.size === newOptions.size;
      });
      return {
        filterOptions: newOptions,
        filteredSpots: filtered,
      };
    }),
  addSpot: (spot) =>
    set((state) => ({
      spots: [...state.spots, spot],
      filteredSpots: [...state.filteredSpots, spot],
    })),
  removeSpot: (spotId) =>
    set((state) => ({
      spots: state.spots.filter((spot) => spot.id !== spotId),
      filteredSpots: state.filteredSpots.filter((spot) => spot.id !== spotId),
    })),
}));