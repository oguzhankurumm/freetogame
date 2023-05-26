import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api';
import { FilterParams, Game } from './types';

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
    try {
        const response = await axiosInstance.get('/games');
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const applyFilters = createAsyncThunk(
    'game/applyFilters',
    async (filters: FilterParams, { rejectWithValue }) => {
        try {
            const { filterType, filterValue } = filters;
            let url = `https://www.freetogame.com/api/games?${filterType}=${filterValue}`;

            const response = await axiosInstance.get(url);
            return response.data as Game[];
        } catch (error) {
            return rejectWithValue('Failed to apply filters');
        }
    }
);