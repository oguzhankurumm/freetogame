import { RootState } from '../../app/store';
import { Game } from './types';

export const selectGames = (state: RootState): Game[] => state.game.games;

export const selectLoading = (state: RootState): boolean => state.game.loading;

export const selectError = (state: RootState): string | null => state.game.error;