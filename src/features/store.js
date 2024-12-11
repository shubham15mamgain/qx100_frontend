import authReducer from "./Auth/AuthSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or use any other storage engine

// Persist configuration
const persistConfig = {
  key: "1X_100", // Unique key for your persisted storage
  storage,
};

// Combine reducers
const combinedReducer = combineReducers({
  auth: authReducer,
});

// Apply persistReducer to the combined reducer
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// Configure store with middleware that ignores non-serializable actions from Redux Persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ignore persist-related actions
      },
    }),
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
