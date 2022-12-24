export type Listener = <State>(newState: State, oldState: State) => void;

export default function createStore<State>(initialState: State) {
  let state = initialState;
  const listeners = new Set<Listener>();

  const getSnapshot = () => {
    return state;
  };

  const setState = (value: Partial<State>) => {
    let oldState = state;
    state = { ...oldState, ...value };
    listeners.forEach((listener) => listener(state, oldState));
  };

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getSnapshot, setState, subscribe };
}
