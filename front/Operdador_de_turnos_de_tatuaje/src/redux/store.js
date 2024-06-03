import { configureStore } from "@reduxjs/toolkit";
import { appointmentReducer, modalReducer, userReducer } from "./reducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    appointment: appointmentReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
