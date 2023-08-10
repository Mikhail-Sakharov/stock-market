import {createAsyncThunk} from '@reduxjs/toolkit';
import {Stock} from '../types/stock.interface';
import {QueryArgs} from '../types/query-args.interface';
import {AppDispatch, State} from '../types/state.types';
import {AxiosInstance} from 'axios';
import {getQueryString} from '../helpers';
import {APIRoute, BASE_URL, CollectionTypeAPIRouteMap} from '../const';
import {Sector} from '../types/sector.interface';
import {Tag} from '../types/tag.interface';
import {CollectionType} from '../types/colletion-type.enum';

export const fetchStocksAction = createAsyncThunk<Stock[], QueryArgs, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'stocks/get',
  async (queryArgs, {dispatch, extra: api}) => {
    const collectionType = CollectionTypeAPIRouteMap[queryArgs.collectionType as CollectionType];
    const queryString = getQueryString(queryArgs);
    const {data} = await api.get<Stock[]>(`${BASE_URL}${APIRoute.Stable}${APIRoute.Stock}${APIRoute.Market}${APIRoute.Collection}${collectionType}${queryString}`);
    return data;
  },
);

export const fetchSectorsAction = createAsyncThunk<Sector[], QueryArgs, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sectors/get',
  async (queryArgs, {dispatch, extra: api}) => {
    const queryString = getQueryString(queryArgs);
    const {data} = await api.get<Sector[]>(`${BASE_URL}${APIRoute.Stable}${APIRoute.RefData}${APIRoute.Sectors}${queryString}`);
    return data;
  },
);

export const fetchTagsAction = createAsyncThunk<Tag[], QueryArgs, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'tags/get',
  async (queryArgs, {dispatch, extra: api}) => {
    const queryString = getQueryString(queryArgs);
    const {data} = await api.get<Tag[]>(`${BASE_URL}${APIRoute.Stable}${APIRoute.RefData}${APIRoute.Tags}${queryString}`);
    return data;
  },
);
