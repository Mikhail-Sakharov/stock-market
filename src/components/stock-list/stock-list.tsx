import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchStocksAction} from '../../store/api-actions';
import {CollectionName} from '../../types/collection-name.enum';
import {token as userToken} from '../../const';
import {getStocks} from '../../store/app-data/selectors';
import {nanoid} from 'nanoid';

function StockList(): JSX.Element {
  const dispatch = useAppDispatch();

  const stocks = useAppSelector(getStocks);

  const token = userToken;

  useEffect(() => {
    dispatch(fetchStocksAction({
      token,
      collectionName: CollectionName.Mostactive
    }));
  }, [dispatch, token]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Primary exchange</TableCell>
            <TableCell align="right">MarketCap</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Ask</TableCell>
            <TableCell align="right">Bid</TableCell>
            <TableCell align="right">Latest</TableCell>
            <TableCell align="right">IEX Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow
              key={nanoid()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${stock.companyName}`}
              </TableCell>
              <TableCell align="right">{`${stock.symbol}`}</TableCell>
              <TableCell align="right">{`${stock.primaryExchange}`}</TableCell>
              <TableCell align="right">{`${stock.marketCap.toLocaleString()} ${stock.currency}`}</TableCell>
              <TableCell
                align="right"
                sx={{color: stock.change > 0 ? 'green' : 'red'}}
              >
                {`${stock.change} / ${stock.changePercent}`}
              </TableCell>
              <TableCell align="right">{stock.iexAskPrice}</TableCell>
              <TableCell align="right">{stock.iexBidPrice}</TableCell>
              <TableCell align="right">{stock.latestPrice}</TableCell>
              <TableCell align="right">{stock.iexVolume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StockList;