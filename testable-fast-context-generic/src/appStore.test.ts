import { describe, expect, it } from 'vitest';
import createStore from './createStore';

describe('appStore', async () => {
  it('should be able to setState', () => {
    const store = createStore({ first: '', last: '' });
    expect(store.getSnapshot()).toEqual({ first: '', last: '' });
    store.setState({ first: 'sdf' });
    expect(store.getSnapshot()).toEqual({ first: 'sdf', last: '' });
    store.setState({ last: 'Bla' });
    expect(store.getSnapshot()).toEqual({ first: 'sdf', last: 'Bla' });
  });
});
