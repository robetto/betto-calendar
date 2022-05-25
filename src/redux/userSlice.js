import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  interfaccia: "mese",
  modalVisible: false,
  dataSelezionata: new Date()
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cambiaInterfaccia: (state, action) => {
      state.interfaccia = action.payload;
    },
    toggleModal: (state) => {
      state.modalVisible = !state.modalVisible;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cambiaInterfaccia, toggleModal } = userSlice.actions;

export default userSlice.reducer;
