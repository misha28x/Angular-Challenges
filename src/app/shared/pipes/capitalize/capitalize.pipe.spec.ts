import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should capitalize string', () => {
    const pipe = new CapitalizePipe();

    const result = pipe.transform('hello world');

    expect(result).toBe('Hello world');
  });
});
