import { ReceiptPaperHandler, WithdrawalHandler, ChargeMobileHandler, handlers, BaseHandler } from './Handler';
import { CustomerRequest } from './model/customer';

export class AtmMachine {
  private handlers: any = [];
  constructor(nameBank: string) {
    this.handlers = handlers;
    this.handlers.forEach((handler: BaseHandler, idx: number) => {
      if(handlers[idx]){
        handler.setNext(handlers[idx + 1]);
      }
    });
  }

  public insertCard() {
    console.log('inserted card');
  }

  public request(req: CustomerRequest) {
    this.handlers[0].handle(req);
  }
}
