import {CollectionType} from './types/colletion-type.enum';

export const BASE_URL = 'https://cloud.iexapis.com';

export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Stable = '/stable',
  Stock = '/stock',
  Market = '/market',
  Collection = '/collection',
  List = '/list',
  RefData = '/ref-data',
  Sectors = '/sectors',
  Sector = '/sector',
  Tags = '/tags',
  Tag = '/tag'
}

export const CollectionTypeAPIRouteMap = {
  [CollectionType.Sector]: APIRoute.Sector,
  [CollectionType.Tag]: APIRoute.Tag,
  [CollectionType.List]: APIRoute.List,
};

// TODO: перенести в переменные окружения
export const token = 'pk_da03ec1ae5264b05bb2e9172e1ce3cba';

export enum ReducerNameSpace {
  AppData = 'APP_DATA'
}
