import { ReceiptPaperHandler, WithdrawalHandler } from './Handler';
import { CustomerRequest } from './model/customer';

export class AtmMachine {
  private receiptPaperHandler: ReceiptPaperHandler = new ReceiptPaperHandler();
  private withdrawalHandler: WithdrawalHandler = new WithdrawalHandler();

  constructor(nameBank: string) {
    this.receiptPaperHandler.setNext(this.withdrawalHandler);
  }

  public insertCard() {
    console.log('inserted card');
  }

  public request(req: CustomerRequest) {
    this.receiptPaperHandler.handle(req);
  }
}
