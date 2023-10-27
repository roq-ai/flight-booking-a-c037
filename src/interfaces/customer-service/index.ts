import { UserInterface } from 'interfaces/user';
import { AirlineInterface } from 'interfaces/airline';
import { GetQueryInterface } from 'interfaces';

export interface CustomerServiceInterface {
  id?: string;
  user_id: string;
  airline_id: string;
  service_hours: string;
  service_phone: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  airline?: AirlineInterface;
  _count?: {};
}

export interface CustomerServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  airline_id?: string;
  service_hours?: string;
  service_phone?: string;
}
