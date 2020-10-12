import { CreditCardService } from './credit-card.service';
import { MC_CARD_EXAMPLE, VISA_CARD_EXAMPLE } from './consts/card.conts';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    service = new CreditCardService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect visa card', () => {
    const result = service.getCardType(VISA_CARD_EXAMPLE);

    expect(result).toBe('visa');
  });

  it('should detect master card card', () => {
    const result = service.getCardType(MC_CARD_EXAMPLE);

    expect(result).toBe('master-card');
  });

  it('should return default if card is not visa ot master card', () => {
    const dinersClubCard = '30569309025904';

    const result = service.getCardType(dinersClubCard);

    expect(result).toBe('default');
  });
});
