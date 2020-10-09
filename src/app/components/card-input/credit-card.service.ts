import { Injectable } from '@angular/core';
import { CreditCardType } from './types/credit-card-type';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private readonly visaRegex = /^4[0-9]{6,}$/;
  private readonly mastercardReg = /^5[1-5][0-9]{14}$/;

  getCardType(cardNumber: string): CreditCardType {
    if (this.isVisa(cardNumber)) {
      return 'visa';
    }

    if (this.isMasterCard(cardNumber)) {
      return 'master-card';
    }

    return 'default';
  }

  private isVisa(cardNumber: string): boolean {
    return this.visaRegex.test(cardNumber);
  }

  private isMasterCard(cardNumber: string): boolean {
    return this.mastercardReg.test(cardNumber);
  }
}
