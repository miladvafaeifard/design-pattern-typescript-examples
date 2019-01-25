import { operatorType } from '../Handler';

export interface CustomerRequest {
  name: string;
  request: {
    type: operatorType;
  };
}
