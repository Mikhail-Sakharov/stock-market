import {ReducerNameSpace} from '../../const';
import {Sector} from '../../types/sector.interface';
import {State} from '../../types/state.types';
import {Stock} from '../../types/stock.interface';

export const getStocks = (state: State): Stock[] => state[ReducerNameSpace.AppData].stocks;
export const getSectors = (state: State): Sector[] => state[ReducerNameSpace.AppData].sectors;
