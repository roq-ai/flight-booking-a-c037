import { CustomerServiceInterface } from 'interfaces/customer-service';
import { FlightInterface } from 'interfaces/flight';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AirlineInterface {
  id?: string;
  description?: string;
  founded_at?: any;
  headquarters?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  customer_service?: CustomerServiceInterface[];
  flight?: FlightInterface[];
  user?: UserInterface;
  _count?: {
    customer_service?: number;
    flight?: number;
  };
}

export interface AirlineGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  headquarters?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
