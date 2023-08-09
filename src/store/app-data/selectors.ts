import {ReducerNameSpace} from '../../const';
import {State} from '../../types/state.types';
import {Stock} from '../../types/stock.interface';

export const getStocks = (state: State): Stock[] => state[ReducerNameSpace.AppData].stocks;
