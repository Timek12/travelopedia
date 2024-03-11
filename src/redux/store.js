import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/destinationApi";
import { randomDestinationAPI } from "../api/randomDestinationApi";

export const store = configureStore({
  reducer: {
    [destinationAPI.reducerPath]: destinationAPI.reducer,
    [randomDestinationAPI.reducerPath]: randomDestinationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationAPI.middleware)
      .concat(randomDestinationAPI.middleware),
});
