import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAppointments: [],
  modal: false,
  id: 0,
  perfilPicture: "",
  logged: false,
  modalLog: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openUserModal: (state) => {
      state.modal = true;
    },

    closeUserModal: (state) => {
      state.modal = false;
    },

    openModalLog: (state) => {
      state.modalLog = true;
    },

    closeModalLog: (state) => {
      state.modalLog = false;
    },
  },
});

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = action.payload.userId;
      state.perfilPicture = action.payload.perfilPicture;
      state.modal = false;
      state.logged = true;
    },

    logout(state) {
      state.id = 0;
      state.perfilPicture = "";
      state.modal = false;
      state.logged = false;
      state.userAppointments = [];
    },
  },
});
const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    updateAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { openUserModal, closeUserModal, openModalLog, closeModalLog } =
  modalSlice.actions;
export const { setAppointments } = appointmentSlice.actions;
export const { login, logout } = userslice.actions;

export const userReducer = userslice.reducer;
export const modalReducer = modalSlice.reducer;
export const appointmentReducer = appointmentSlice.reducer;
