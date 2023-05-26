import { Alert } from 'react-native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game, GameSliceState } from './types';
import { fetchGames, applyFilters } from './actions';
import { getErrorMessage } from '../../../utils';

const initialState: GameSliceState = {
    games: [],
    filteredGames: [],
    loading: false,
    error: null,
    selectedFilter: '',
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.selectedFilter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGames.fulfilled, (state, action: PayloadAction<Game[]>) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.loading = false;
                state.error = getErrorMessage(action.error?.code);
                Alert.alert('Error', state.error);
            })
            .addCase(applyFilters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(applyFilters.fulfilled, (state, action: PayloadAction<Game[]>) => {
                state.loading = false;
                state.games = action.payload;
            })
            .addCase(applyFilters.rejected, (state, action) => {
                state.loading = false;
                state.error = getErrorMessage(action.error?.code);
                Alert.alert('Error', state.error);
            });
    },
});

export const { setFilter } = gameSlice.actions;

export default gameSlice.reducer;