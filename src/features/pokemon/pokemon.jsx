import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonByName } from './pokemonSlice';
import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { name, img, status } = useSelector((state) => state.pokemon);
  const [keyword, setKeyword] = React.useState('');

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchPokemonByName(keyword));
  }, [dispatch, keyword]);

  return (
    <React.Fragment>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pokemon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword}
          label="ポケモン"
          onChange={handleChange}
        >
          <MenuItem value={'pichu'}>ピチュー</MenuItem>
          <MenuItem value={'pikachu'}>ピカチュー</MenuItem>
        </Select>
      </FormControl>
      <div>{status}</div>
      <div>{name}</div>
      <img src={img} alt={name} />
    </React.Fragment>
  );
};

const ReadOnlyPokemon = () => {
  const { name, img } = useSelector((state) => state.pokemon);
  return <img src={img} alt={name} />;
};

const PokemonList = () => {
  return (
    <React.Fragment>
      <Pokemon />
      <Card>
        <Typography>This is no fetch pichu</Typography>
        <CardContent>
          <ReadOnlyPokemon />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export { Pokemon, ReadOnlyPokemon, PokemonList };
