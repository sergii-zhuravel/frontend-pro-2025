import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slices/todosSlice";
import { logger } from "redux-logger";

export const store = configureStore({
  reducer: todosSlice.reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
