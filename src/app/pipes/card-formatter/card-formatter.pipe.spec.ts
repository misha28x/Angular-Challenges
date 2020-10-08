import { CardFormatterPipe } from './card-formatter.pipe';
import { CARD_INVALID_ERROR, CARD_LENGTH_ERROR } from './card.consts';

describe('CardFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CardFormatterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return length error if card is to short', () => {
    const pipe = new CardFormatterPipe();
    const testNumber = '123456789';

    const result = pipe.transform(testNumber);

    expect(result).toBe(CARD_LENGTH_ERROR);
  });

  it('should return validity error if card is not valie', () => {
    const pipe = new CardFormatterPipe();
    const testNumber = '123456789abcdfgh';

    const result = pipe.transform(testNumber);

    expect(result).toBe(CARD_INVALID_ERROR);
  });

  it('should return formatted card number', () => {
    const pipe = new CardFormatterPipe();
    const testNumber = '4024007106776304';
    const formattedNumber = '4024-0071-0677-6304';

    const result = pipe.transform(testNumber);

    expect(result).toBe(formattedNumber);
  });
});
