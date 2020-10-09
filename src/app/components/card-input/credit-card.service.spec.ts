import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    service = new CreditCardService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect visa card', () => {
    const visaCardNumber = '4111111111111111';

    const result = service.getCardType(visaCardNumber);

    expect(result).toBe('visa');
  });

  it('should detect master card card', () => {
    const masterCard = '5555555555554444';

    const result = service.getCardType(masterCard);

    expect(result).toBe('master-card');
  });

  it('should return default if card is not visa ot master card', () => {
    const dinersClubCard = '30569309025904';

    const result = service.getCardType(dinersClubCard);

    expect(result).toBe('default');
  });
});
