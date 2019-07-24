import { NgTestPipePipe } from './ng-test-pipe.pipe';

describe('NgTestPipePipe', () => {
  it('create an instance', () => {
    const pipe = new NgTestPipePipe();
    expect(pipe).toBeTruthy();
  });
});
