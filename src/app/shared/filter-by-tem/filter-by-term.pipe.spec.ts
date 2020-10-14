import { FilterByTermPipe } from './filter-by-term.pipe';

describe('FilterByTermPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByTermPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter array by term', () => {
    const pipe = new FilterByTermPipe();
    const arr = ['Hello', 'World', 'Hello World', 'string', 'and', 'term'];
    const term = 'Hello';

    const result = pipe.transform(arr, term);

    expect(result).toEqual(['Hello', 'Hello World']);
  });

  it('should filter arrays with different casing', () => {
    const pipe = new FilterByTermPipe();
    const arr = ['Hello', 'World', 'hello World', 'string', 'and', 'term'];
    const term = 'Hello';

    const result = pipe.transform(arr, term);

    expect(result).toEqual(['Hello', 'hello World']);
  });
});
