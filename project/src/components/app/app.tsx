import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import PropertyScreen from '../property-screen/property-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../../util';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoute.Main} element = {<MainScreen />} />
        <Route path = {AppRoute.Room} element = {<PropertyScreen />} />
        <Route path = {AppRoute.Favorites}
          element = {
            <PrivateRoute>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path = {AppRoute.Login} element = {<LoginScreen />} />
        <Route path = "*" element = {<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
