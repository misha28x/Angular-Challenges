import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return original string if it is shorter than max', () => {
    const pipe = new TruncatePipe();
    const testString = 'Some string that should be returned as it is';

    const result = pipe.transform(testString);
    expect(result).toBe(testString);
  });

  it('should truncate string correctly', () => {
    const max = 100;
    const pipe = new TruncatePipe();
    const testString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit`;

    const result = pipe.transform(testString, max);

    expect(result.length).toBe(max + 3);
  });
});
