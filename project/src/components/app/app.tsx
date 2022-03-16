import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import PropertyScreen from '../property-screen/property-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Offers} from '../../types/offers';


type AppScreenProps = {
  offers: Offers;
}

function App({offers}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {AppRoute.Main} element = {<MainScreen />} />
        <Route path = {AppRoute.Room} element = {<PropertyScreen />} />
        <Route path = {AppRoute.Favorites}
          element = {
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers = {offers} />
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
