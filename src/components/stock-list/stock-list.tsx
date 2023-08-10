import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ChangeEvent, useEffect, useState} from 'react';
import {fetchSectorsAction, fetchStocksAction, fetchTagsAction} from '../../store/api-actions';
import {CollectionName} from '../../types/collection-name.enum';
import {token as userToken} from '../../const';
import {getSectors, getStocks, getTags} from '../../store/app-data/selectors';
import {nanoid} from 'nanoid';
import {Pagination} from '@mui/material';
import CustomSelect from '../custom-select/custom-select';

const MAX_STOCKS_PER_PAGE = 10;

function StockList(): JSX.Element {
  const dispatch = useAppDispatch();

  const stocks = useAppSelector(getStocks);
  const sectors = useAppSelector(getSectors);
  const tags = useAppSelector(getTags);

  const pagesCount = Math.ceil(stocks.length / MAX_STOCKS_PER_PAGE);

  const [pageNumber, setPageNumber] = useState(1);

  const [collectionType, setCollectionType] = useState('');
  const [sectorValue, setSectorValue] = useState('');
  const [tagValue, setTagValue] = useState('');
  const [listValue, setListValue] = useState('');

  const token = userToken;

  useEffect(() => {
    dispatch(fetchSectorsAction({token}));
    dispatch(fetchTagsAction({token}));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(fetchStocksAction({
      token,
      collectionName: CollectionName.Technology
    }));
  }, [dispatch, token]);

  const handlePageNumberChange = (_event: ChangeEvent<unknown>, page: number) => {
    setPageNumber(page);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <CustomSelect
          selectLabel='Choose the Type'
          selectItems={['Sector', 'Tag', 'List']}
          setValue={setCollectionType}
        />
        {
          collectionType === 'Sector'
            && (
              <CustomSelect
                selectLabel='Choose the Sector'
                selectItems={sectors.map((sector) => sector.name)}
                setValue={setSectorValue}
              />
            )
        }
        {
          collectionType === 'Tag'
            && (
              <CustomSelect
                selectLabel='Choose the Tag'
                selectItems={tags.map((tag) => tag.name)}
                setValue={setTagValue}
              />
            )
        }
        {
          collectionType === 'List'
            && (
              <CustomSelect
                selectLabel='Choose the List'
                selectItems={Object.values(CollectionName)}
                setValue={setListValue}
              />
            )
        }
      </div>
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
            {stocks.slice(
              (pageNumber - 1) * MAX_STOCKS_PER_PAGE,
              MAX_STOCKS_PER_PAGE * pageNumber
            ).map((stock) => (
              <TableRow
                key={nanoid()}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${stock.companyName ?? '-'}`}
                </TableCell>
                <TableCell align="right">{`${stock.symbol ?? '-'}`}</TableCell>
                <TableCell align="right">{`${stock.primaryExchange ?? '-'}`}</TableCell>
                <TableCell align="right">{`${stock.marketCap ? stock.marketCap.toLocaleString() : '-'} ${stock.currency ?? ''}`}</TableCell>
                <TableCell
                  align="right"
                  sx={{color: stock.change > 0 ? 'green' : 'red'}}
                >
                  {`${stock.change ?? '-'} / ${stock.changePercent ?? '-'}`}
                </TableCell>
                <TableCell align="right">{stock.iexAskPrice ?? '-'}</TableCell>
                <TableCell align="right">{stock.iexBidPrice ?? '-'}</TableCell>
                <TableCell align="right">{stock.latestPrice ?? '-'}</TableCell>
                <TableCell align="right">{stock.iexVolume ?? '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{alignSelf: 'center', marginTop: '10px'}}>
        <Pagination count={pagesCount} onChange={handlePageNumberChange} variant="outlined"/>
      </div>
    </div>
  );
}

export default StockList;
