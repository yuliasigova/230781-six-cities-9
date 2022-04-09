export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum SortType  {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHigh = 'Price: high to low',
  Rated = 'Top rated first',
}

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum NameSpace {
  Hotels = 'HOTELS',
  Offer = 'OFFER',
  User = 'USER',
}
