import { Dog } from './dog';

describe('Dog', () => {
  it('should be defined', () => {
    expect(new Dog()).toBeDefined();
  });
});
