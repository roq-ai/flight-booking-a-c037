import { UserInterface } from 'interfaces/user';
import { FlightInterface } from 'interfaces/flight';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id: string;
  flight_id: string;
  booking_date: any;
  seat_number: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  flight?: FlightInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  flight_id?: string;
  seat_number?: string;
}
