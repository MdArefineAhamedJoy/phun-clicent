import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import  authSlice  from "./features/auth/authSlice";

const persistConfig = {
  key: 'auth',
  storage,
}
const persistedReducer = persistReducer(persistConfig , authSlice)
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const persistor =  persistStore(store)