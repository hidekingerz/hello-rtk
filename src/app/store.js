import { configureStore } from '@reduxjs/toolkit';
import mainSlice from '../features/main/mainSlice';
import thunkMiddleware from 'redux-thunk';
import pokemonSlice from '../features/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    main: mainSlice,
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});
