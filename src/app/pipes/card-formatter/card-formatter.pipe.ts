import { Pipe, PipeTransform } from '@angular/core';

import {
  AMERICAN_EXPRESS_LENGTH,
  CARD_INVALID_ERROR,
  CARD_LENGTH_ERROR,
  VISA_MASTERCARD_LENGTH,
} from './card.consts';

@Pipe({
  name: 'cardFormatter',
})
export class CardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!this.isValidLength(cardNumber)) {
      return CARD_LENGTH_ERROR;
    }

    if (!this.isValidCharacters(cardNumber)) {
      return CARD_INVALID_ERROR;
    }

    return this.formatCardNumber(cardNumber);
  }

  private isValidLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;

    return (
      cardNumberLength === VISA_MASTERCARD_LENGTH ||
      cardNumberLength === AMERICAN_EXPRESS_LENGTH
    );
  }

  private isValidCharacters(cardNumber: string): boolean {
    return !cardNumber.split('').some((char) => isNaN(parseInt(char, 10)));
  }

  private formatCardNumber(cardNumber: string): string {
    const result = [];
    const steps = 4;

    for (let index = 0; index < steps; index++) {
      result.push(cardNumber.slice(index * steps, (index + 1) * steps));
    }

    return result.join('-');
  }
}
