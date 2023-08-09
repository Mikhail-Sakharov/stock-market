import {createSlice} from '@reduxjs/toolkit';
import {ReducerNameSpace} from '../../const';
import {fetchStocksAction} from '../api-actions';
import {Stock} from '../../types/stock.interface';

type AppData = {
  stocks: Stock[];
};

const initialState: AppData = {
  stocks: []
};

export const appData = createSlice({
  name: ReducerNameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStocksAction.fulfilled, (state, action) => {
        state.stocks = action.payload;
      });
  }
});
