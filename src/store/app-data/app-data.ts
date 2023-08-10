import {createSlice} from '@reduxjs/toolkit';
import {ReducerNameSpace} from '../../const';
import {fetchSectorsAction, fetchStocksAction} from '../api-actions';
import {Stock} from '../../types/stock.interface';
import {Sector} from '../../types/sector.interface';

type AppData = {
  stocks: Stock[];
  sectors: Sector[];
};

const initialState: AppData = {
  stocks: [],
  sectors: []
};

export const appData = createSlice({
  name: ReducerNameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStocksAction.fulfilled, (state, action) => {
        state.stocks = action.payload;
      })
      .addCase(fetchSectorsAction.fulfilled, (state, action) => {
        state.sectors = action.payload;
      });
  }
});
