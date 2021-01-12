import { createStore } from "@stencil/store";
import state from './store';

describe('store', () => {
  it('should return same store', () => {
    const initialStore = createStore({
		  newsList: null
		});
    expect(state).toBe(initialStore);
  });
});