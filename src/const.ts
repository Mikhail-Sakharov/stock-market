export const BASE_URL = 'https://cloud.iexapis.com';

export enum APIRoute {
  Stable = '/stable',
  Stock = '/stock',
  Market = '/market',
  Collection = '/collection',
  List = '/list',
  RefData = '/ref-data',
  Sectors = '/sectors'
}

// TODO: перенести в переменные окружения
export const token = 'pk_da03ec1ae5264b05bb2e9172e1ce3cba';
