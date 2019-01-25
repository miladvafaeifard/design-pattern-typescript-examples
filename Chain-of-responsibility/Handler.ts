import { CustomerRequest } from './model/customer';

export interface Handler {
  setNext: (handler: Handler) => void;
  handle: (request: any) => void;
  operation: (request: CustomerRequest) => void;
}

export type operatorType = 'RECEIPT_PAPER' | 'WITHDRAWAL' | 'others';

export abstract class BaseHandler {
  private handler: BaseHandler = null;

  setNext(handler: BaseHandler) {
    this.handler = handler;
  }

  hasNext() {
    return this.handler;
  }

  public operation(request: CustomerRequest): void {
    if (this.hasNext()) {
      this.handler.handle(request);
    } else {
      console.log('could not find a handler to handle for the request');
    }
  }

  public abstract handle(request: CustomerRequest): void;
}

export class ReceiptPaperHandler extends BaseHandler {
  public handle(request: CustomerRequest): void {
    if (request.request.type === 'RECEIPT_PAPER') {
      console.log('handling receipt paper');
    } else {
      console.log('forwarding to next handler');
      super.operation(request);
    }
  }
}

export class WithdrawalHandler extends BaseHandler {
  public handle(request: CustomerRequest): void {
    if (request.request.type === 'WITHDRAWAL') {
      console.log('handling withdrawal');
    } else {
      console.log('forwarding to next handler');
      super.operation(request);
    }
  }
}
