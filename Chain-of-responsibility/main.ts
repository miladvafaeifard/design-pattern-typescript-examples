import { AtmMachine } from './atm-machine';
import { CustomerRequest } from './model/customer';

const atmMachine: AtmMachine = new AtmMachine('Dog Bank');

const clientRequest: CustomerRequest = {
  name: 'John Smith',
  request: {
    type: 'CHARGE_MOBILE'
  }
};

atmMachine.insertCard();
atmMachine.request(clientRequest as CustomerRequest);
