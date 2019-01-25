import { ReceiptPaperHandler, WithdrawalHandler, ChargeMobileHandler } from './Handler';
import { CustomerRequest } from './model/customer';

export class AtmMachine {
  private receiptPaperHandler: ReceiptPaperHandler = new ReceiptPaperHandler();
  private withdrawalHandler: WithdrawalHandler = new WithdrawalHandler();
  private chargeMobileHandler: ChargeMobileHandler = new ChargeMobileHandler();

  constructor(nameBank: string) {
    this.receiptPaperHandler.setNext(this.withdrawalHandler);
    this.withdrawalHandler.setNext(this.chargeMobileHandler);
  }

  public insertCard() {
    console.log('inserted card');
  }

  public request(req: CustomerRequest) {
    this.receiptPaperHandler.handle(req);
  }
}
