import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/app/store';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { fetchGames } from './src/redux/features/game/actions';

store.dispatch(fetchGames());
// instead of dispatching this action here, we can dispatch it in Home screen
// but with this approach we can dispatch this action before Home screen is rendered
// because we want to fetch games before Home screen is rendered

const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;