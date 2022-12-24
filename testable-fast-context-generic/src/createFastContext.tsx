import React, { createContext, useContext, useSyncExternalStore } from 'react';
import createStore from './createStore';

export default function createFastContext<State>(initialState: State) {
  type UseStoreDataReturnType = ReturnType<typeof createStore<State>>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    const store = createStore(initialState);
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  }

  function useStore<SelectorOutput>(
    selector: (store: State) => SelectorOutput,
  ): [SelectorOutput, (value: Partial<State>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.getSnapshot()),
      () => selector(initialState),
    );

    return [state, store.setState];
  }

  return {
    Provider,
    useStore,
  };
}
