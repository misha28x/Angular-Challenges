import { FlatPipePipe } from './flat-pipe.pipe';

describe('FlatPipePipe', () => {
  it('create an instance', () => {
    const pipe = new FlatPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should flatten the array', () => {
    const pipe = new FlatPipePipe();
    const result = pipe.transform([[1, 2, 3], 4]);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should flatten nested arrays', () => {
    const pipe = new FlatPipePipe();
    const result = pipe.transform([[1, 2, [3, 14]], 4]);

    expect(result).toEqual([1, 2, 3, 14, 4]);
  });
});
