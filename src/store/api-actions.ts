import {createAsyncThunk} from '@reduxjs/toolkit';
import {Stock} from '../types/stock.interface';
import {QueryArgs} from '../types/query-args.interface';
import {AppDispatch, State} from '../types/state.types';
import {AxiosInstance} from 'axios';
import {getQueryString} from '../helpers';
import {APIRoute, BASE_URL} from '../const';

export const fetchStocksAction = createAsyncThunk<Stock[], QueryArgs, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'stocks/get',
  async (queryArgs, {dispatch, extra: api}) => {
    const queryString = getQueryString(queryArgs);
    const {data} = await api.get<Stock[]>(`${BASE_URL}${APIRoute.Stable}${APIRoute.Stock}${APIRoute.Market}${APIRoute.Collection}${APIRoute.Sector}${queryString}`);
    return data;
  },
);
