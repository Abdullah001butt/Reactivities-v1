import { createContext } from "react";
import CounterStore from "./counterStore";
import { UiStore } from "./uiStore";

interface Store {
  counterStore: CounterStore;
  UiStore: UiStore
}

export const store: Store = {
  counterStore: new CounterStore(),
  UiStore: new UiStore(),
};

export const StoreContext = createContext(store)