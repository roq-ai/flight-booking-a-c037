interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Travel Agent'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Travel Agent', 'Customer Service Representative'],
  tenantName: 'Airline',
  applicationName: 'Flight Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Edit user information',
    'Create bookings',
    'View flight information',
    'Contact customer service',
  ],
  ownerAbilities: [
    'Manage bookings',
    'Read flight information',
    'Communicate with customer service',
    'Update agency information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4a2db28b-6a3c-4c58-9342-091ab5614354',
};
