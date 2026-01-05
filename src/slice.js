import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Fetudiant = createAsyncThunk("Etudiants/Fetudiants", async () => {
  const res = await fetch("http://localhost/APIETUDIANTS1/getEtudiant.php");
  const data = res.json;
  return data;
});

const sliceEtu = createSlice({
  name: "Etudiants",
  initialState: {
    items: [],
    status: "idel"(loading, succ, failed),
    error: null,
  },
  reducers: {
    ajouter: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducer: (builder) => {
    builder.addCase(Fetudiant.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});
export const { ajouter } = sliceEtu.actions;
export default sliceEtu.reducer;
