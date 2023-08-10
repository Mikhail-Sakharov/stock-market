import {createSlice} from '@reduxjs/toolkit';
import {ReducerNameSpace} from '../../const';
import {fetchSectorsAction, fetchStocksAction, fetchTagsAction} from '../api-actions';
import {Stock} from '../../types/stock.interface';
import {Sector} from '../../types/sector.interface';
import {Tag} from '../../types/tag.interface';

type AppData = {
  stocks: Stock[];
  sectors: Sector[];
  tags: Tag[];
};

const initialState: AppData = {
  stocks: [],
  sectors: [],
  tags: []
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
      })
      .addCase(fetchTagsAction.fulfilled, (state, action) => {
        state.tags = action.payload;
      });
  }
});
