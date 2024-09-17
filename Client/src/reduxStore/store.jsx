import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import residentSlice from "./residentSlice";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    resident: residentSlice,
  },

  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
