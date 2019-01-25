import { AtmMachine } from './atm-machine';
import { CustomerRequest } from './model/customer';

const atmMachine: AtmMachine = new AtmMachine('Dog Bank');

const clientRequest = {
  name: 'John Smith',
  request: {
    type: 'WITHDRAWAL'
  }
};

atmMachine.insertCard();
atmMachine.request(clientRequest as CustomerRequest);
