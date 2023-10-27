import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TravelAgentInterface {
  id?: string;
  user_id: string;
  agency_name: string;
  agency_address: string;
  agency_phone: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface TravelAgentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  agency_name?: string;
  agency_address?: string;
  agency_phone?: string;
}
