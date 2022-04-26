import { Host } from './offers';

export type Review = {
  id: number;
  user: Host;
  rating: number;
  comment: string;
  date: Date;
}

export type Reviews = Review[];

export type NewReview = {
  idHotels: number;
  rating: number;
  comment: string;
}

