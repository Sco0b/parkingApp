import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import placesReducer from "./slice/places.slice";

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
