import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovies } from "./moviesThunks";
import { Movie, MoviesReducerState } from "./types";
// import { collection, getDocs } from "firebase/firestore";
// import db from "../../config/firebase";

const INITIAL_STATE: MoviesReducerState = {
  movies: [],
  loading: "idle",
};

const moviesSlice = createSlice({
  name: "snapshots",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, _action) => {
        state.loading = "pending";
      })
      .addCase(
        getMovies.fulfilled,
        (state, { payload }: PayloadAction<Movie[]>) => {
          state.loading = "idle";
          state.movies = payload;
        }
      )
      .addCase(getMovies.rejected, (state, _action) => {
        state.loading = "rejected";
      });
  },
});

export const getMoviesAction = getMovies;
export default moviesSlice.reducer;
