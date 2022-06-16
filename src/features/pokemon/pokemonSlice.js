import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchPokemonByName = createAsyncThunk('pokemon/fetchByName', async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
});

const initialState = {
  name: '',
  img: '',
  status: '',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonByName.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.name = action.payload.name;
      state.img = action.payload.sprites.front_shiny;
    });

    builder.addCase(fetchPokemonByName.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export { fetchPokemonByName };
export default pokemonSlice.reducer;
