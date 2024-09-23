export class BaseBloc<T> {
  subscribers: Set<(state: T) => void>;
  state: T | null;
  persistKey: string;

  constructor(persistKey: string) {
    this.subscribers = new Set();
    this.state = null;
    this.persistKey = persistKey;

    this.loadPersistedState();

    window.addEventListener("beforeunload", () => {
      this.savePersistedState();
    });
  }

  loadPersistedState(): void {
    const persistedState = sessionStorage.getItem(this.persistKey);
    if (persistedState) {
      this.state = JSON.parse(persistedState);
      sessionStorage.removeItem(this.persistKey);
    }
  }

  savePersistedState(): void {
    sessionStorage.setItem(this.persistKey, JSON.stringify(this.state));
  }

  setState(newState: Partial<T>) {
    if (!newState) {
      return;
    }
    this.state = { ...this.state, ...newState };
    this.notifySubscribers();
  }

  getState(): T | null {
    return this.state;
  }

  subscribe(callback: (state: T) => void): void {
    this.subscribers.add(callback);
  }

  unsubscribe(callback: (state: T) => void): void {
    this.subscribers.delete(callback);
  }

  notifySubscribers(): void {
    this.subscribers.forEach((callback) => {
      this.notifySubscriber(callback);
    });
  }

  notifySubscriber(callback: (state: T) => void) {
    callback(this.state);
  }
}
